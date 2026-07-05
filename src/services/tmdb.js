const API_KEY = "4bb9fd44f0907b5158c6a6db356c360e";
const BASE = "https://api.themoviedb.org/3";

// ─── Cache Layer ───────────────────────────────────────────
const CACHE_PREFIX = "tmdb_";
const MAX_CACHE_SIZE = 4 * 1024 * 1024; // 4MB

const CACHE_TTL = {
  search: 60 * 60 * 1000,          // 1 hour
  details: 24 * 60 * 60 * 1000,    // 24 hours
  videos: 7 * 24 * 60 * 60 * 1000, // 7 days
  recommendations: 7 * 24 * 60 * 60 * 1000,
  collection: 7 * 24 * 60 * 60 * 1000,
  season: 24 * 60 * 60 * 1000,     // 24 hours
};

function getCacheKey(category, ...parts) {
  return `${CACHE_PREFIX}${category}_${parts.join("_")}`;
}

function getFromCache(key, ttl) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > ttl) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setInCache(key, data) {
  try {
    evictIfNeeded();
    localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // Storage full — evict aggressively
    evictOldest(10);
    try {
      localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
    } catch {
      // Give up silently
    }
  }
}

function evictIfNeeded() {
  let totalSize = 0;
  const entries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(CACHE_PREFIX)) {
      const val = localStorage.getItem(k) || "";
      totalSize += val.length * 2; // rough byte estimate
      try {
        const { ts } = JSON.parse(val);
        entries.push({ key: k, ts, size: val.length * 2 });
      } catch {
        entries.push({ key: k, ts: 0, size: val.length * 2 });
      }
    }
  }
  if (totalSize > MAX_CACHE_SIZE) {
    evictOldest(Math.ceil(entries.length * 0.3));
  }
}

function evictOldest(count) {
  const entries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(CACHE_PREFIX)) {
      try {
        const { ts } = JSON.parse(localStorage.getItem(k) || "{}");
        entries.push({ key: k, ts: ts || 0 });
      } catch {
        entries.push({ key: k, ts: 0 });
      }
    }
  }
  entries.sort((a, b) => a.ts - b.ts);
  for (let i = 0; i < Math.min(count, entries.length); i++) {
    localStorage.removeItem(entries[i].key);
  }
}

// ─── API Functions ─────────────────────────────────────────

export async function searchTMDB(query) {
  const cacheKey = getCacheKey("search", encodeURIComponent(query));
  const cached = getFromCache(cacheKey, CACHE_TTL.search);
  if (cached) return cached;

  const res = await fetch(
    `${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  const results = (data.results || []).filter(
    r => r.media_type === "movie" || r.media_type === "tv"
  );
  setInCache(cacheKey, results);
  return results;
}

export async function getDetails(type, id) {
  const cacheKey = getCacheKey("details", type, id);
  const cached = getFromCache(cacheKey, CACHE_TTL.details);
  if (cached) return cached;

  const res = await fetch(`${BASE}/${type}/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  setInCache(cacheKey, data);
  return data;
}

export async function getVideos(type, id) {
  const cacheKey = getCacheKey("videos", type, id);
  const cached = getFromCache(cacheKey, CACHE_TTL.videos);
  if (cached !== null) return cached;

  const res = await fetch(`${BASE}/${type}/${id}/videos?api_key=${API_KEY}`);
  const data = await res.json();
  const trailer = data.results?.find(
    video => video.type === "Trailer" && video.site === "YouTube"
  ) || data.results?.find(
    video => video.site === "YouTube"
  );
  const key = trailer ? trailer.key : null;
  setInCache(cacheKey, key);
  return key;
}

export function posterUrl(path) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : null;
}

// ─── New: Season details (for episode counts) ─────────────

export async function getSeasonDetails(tvId, seasonNumber) {
  const cacheKey = getCacheKey("season", tvId, seasonNumber);
  const cached = getFromCache(cacheKey, CACHE_TTL.season);
  if (cached) return cached;

  const res = await fetch(
    `${BASE}/tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}`
  );
  const data = await res.json();
  setInCache(cacheKey, data);
  return data;
}

// Get episode counts per season (fetches show details, extracts from seasons array)
export async function getSeasonEpisodeCounts(tvId) {
  const details = await getDetails("tv", tvId);
  if (!details.seasons) return {};
  const counts = {};
  for (const s of details.seasons) {
    if (s.season_number > 0) { // Skip specials (season 0)
      counts[s.season_number] = s.episode_count;
    }
  }
  return counts;
}

// ─── New: Upcoming episode info ───────────────────────────

export function extractUpcomingInfo(details) {
  // next_episode_to_air is included in TV details response — no extra API call
  const next = details?.next_episode_to_air;
  if (!next) return null;
  return {
    date: next.air_date,
    season: next.season_number,
    episode: next.episode_number,
    name: next.name,
    info: `S${next.season_number} E${next.episode_number}`,
  };
}

// Check if a show has upcoming episodes within N months
export function hasUpcomingWithinMonths(details, months = 12) {
  const next = details?.next_episode_to_air;
  if (!next || !next.air_date) return false;
  const nextDate = new Date(next.air_date);
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() + months);
  return nextDate <= cutoff && nextDate >= new Date();
}

// ─── New: Recommendations & Similar ──────────────────────

export async function getRecommendations(type, id) {
  const cacheKey = getCacheKey("recommendations", type, id);
  const cached = getFromCache(cacheKey, CACHE_TTL.recommendations);
  if (cached) return cached;

  try {
    const [recRes, simRes] = await Promise.all([
      fetch(`${BASE}/${type}/${id}/recommendations?api_key=${API_KEY}`),
      fetch(`${BASE}/${type}/${id}/similar?api_key=${API_KEY}`)
    ]);
    const [recData, simData] = await Promise.all([recRes.json(), simRes.json()]);

    // Merge and deduplicate
    const seen = new Set();
    const combined = [];
    for (const item of [...(recData.results || []), ...(simData.results || [])]) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        combined.push({
          id: item.id,
          title: item.title || item.name,
          poster_path: item.poster_path,
          media_type: type,
          vote_average: item.vote_average,
          overview: item.overview,
          release_date: item.release_date || item.first_air_date,
        });
      }
    }
    const result = combined.slice(0, 12);
    setInCache(cacheKey, result);
    return result;
  } catch {
    return [];
  }
}

// ─── New: Collection / Franchise info ────────────────────

export async function getCollection(collectionId) {
  if (!collectionId) return null;
  const cacheKey = getCacheKey("collection", collectionId);
  const cached = getFromCache(cacheKey, CACHE_TTL.collection);
  if (cached) return cached;

  try {
    const res = await fetch(`${BASE}/collection/${collectionId}?api_key=${API_KEY}`);
    const data = await res.json();
    const result = {
      id: data.id,
      name: data.name,
      overview: data.overview,
      poster_path: data.poster_path,
      parts: (data.parts || [])
        .sort((a, b) => {
          // Sort by release date for proper viewing order
          const dateA = a.release_date || "9999";
          const dateB = b.release_date || "9999";
          return dateA.localeCompare(dateB);
        })
        .map(p => ({
          id: p.id,
          title: p.title,
          poster_path: p.poster_path,
          release_date: p.release_date,
          vote_average: p.vote_average,
          media_type: "movie",
        })),
    };
    setInCache(cacheKey, result);
    return result;
  } catch {
    return null;
  }
}

// ─── Batch refresh with cache awareness ──────────────────

export async function batchRefreshDetails(items, delayMs = 250) {
  const results = [];
  for (const item of items) {
    const cacheKey = getCacheKey("details", item.type, item.tmdbId);
    const cached = getFromCache(cacheKey, CACHE_TTL.details);
    if (cached) {
      results.push({ item, details: cached, fromCache: true });
    } else {
      // Small delay between actual API calls to avoid rate limiting
      if (results.length > 0 && !results[results.length - 1].fromCache) {
        await new Promise(r => setTimeout(r, delayMs));
      }
      try {
        const details = await getDetails(item.type, item.tmdbId);
        results.push({ item, details, fromCache: false });
      } catch (e) {
        console.error(`Failed to refresh ${item.title}:`, e);
        results.push({ item, details: null, fromCache: false });
      }
    }
  }
  return results;
}
