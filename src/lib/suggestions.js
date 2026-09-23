// "Surprise me" suggestion logic. The watchlist items themselves don't store
// genres, so callers pair each item with its TMDB details first. Everything
// here is pure so it can be tested without hitting TMDB.

// How many of the highest-weighted items seed the genre profile.
export const SEED_COUNT = 15;

// How much an item says about the user's taste: eagerness (1–5) for the
// watchlist; for finished titles, half their 1–10 rating — but only if they
// liked it (6+), so a 3/10 doesn't pull its genres in.
export function seedWeight(item) {
  if (item.finishedAt) return item.finalRating >= 6 ? item.finalRating / 2 : 0;
  return item.eagerness || 1;
}

// Builds per-type genre weights: each seed item adds its weight to every
// genre it has. Movie and TV genre IDs differ on TMDB, so they're kept apart.
export function buildGenreProfile(seeds) {
  const profile = { movie: {}, tv: {} };
  for (const { item, details } of seeds) {
    const weights = profile[item.type];
    const w = seedWeight(item);
    if (!weights || !w || !details?.genres) continue;
    for (const g of details.genres) {
      weights[g.id] = (weights[g.id] || 0) + w;
    }
  }
  return profile;
}

export function topGenres(weights, n = 3) {
  return Object.entries(weights)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([id]) => Number(id));
}

// Picks a type to suggest, weighted by how much genre weight each type has
// (so a mostly-TV watchlist mostly gets TV suggestions).
export function pickType(profile, random = Math.random) {
  const total = t => Object.values(profile[t]).reduce((s, w) => s + w, 0);
  const movie = total("movie");
  const tv = total("tv");
  if (movie + tv === 0) return random() < 0.5 ? "movie" : "tv";
  return random() * (movie + tv) < movie ? "movie" : "tv";
}

export function scoreCandidate(candidate, weights) {
  const genreScore = (candidate.genre_ids || []).reduce(
    (s, id) => s + (weights[id] || 0),
    0
  );
  // Rating nudges ties apart without overriding genre fit.
  return genreScore + (candidate.vote_average || 0) / 2;
}

export const suggestionKey = c => `${c.media_type}_${c.id}`;

// Weighted-random pick among the best-scoring candidates not in `exclude`
// (a Set of suggestionKey strings), so "another one" gives variety.
export function pickSuggestion(candidates, weights, exclude, random = Math.random, poolSize = 10) {
  const pool = candidates
    .filter(c => !exclude.has(suggestionKey(c)))
    .map(c => ({ c, score: scoreCandidate(c, weights) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, poolSize);
  if (pool.length === 0) return null;

  const total = pool.reduce((s, p) => s + p.score, 0);
  if (total <= 0) return pool[Math.floor(random() * pool.length)].c;
  let r = random() * total;
  for (const p of pool) {
    r -= p.score;
    if (r < 0) return p.c;
  }
  return pool[pool.length - 1].c;
}

// ─── Optional filters (type / genre / era) ────────────────

// TMDB's TV genres merge some movie genres ("Action & Adventure"), so a genre
// picked by name maps to one or more ids per type.
const GENRE_EQUIV = {
  tv: {
    Action: "Action & Adventure",
    Adventure: "Action & Adventure",
    "Science Fiction": "Sci-Fi & Fantasy",
    Fantasy: "Sci-Fi & Fantasy",
    War: "War & Politics",
  },
  movie: {
    "Action & Adventure": ["Action", "Adventure"],
    "Sci-Fi & Fantasy": ["Science Fiction", "Fantasy"],
    "War & Politics": ["War"],
  },
};

// lists: { movie: [{id, name}], tv: [{id, name}] } from TMDB's genre lists.
export function genreIdsFor(type, names, lists) {
  const byName = new Map((lists[type] || []).map(g => [g.name, g.id]));
  const ids = new Set();
  for (const name of names) {
    const mapped = [name, ...[].concat(GENRE_EQUIV[type][name] || [])];
    for (const n of mapped) if (byName.has(n)) ids.add(byName.get(n));
  }
  return [...ids];
}

// Genre chips to offer: that type's list, or for "either" the movie genres
// plus TV-only ones that have no movie counterpart.
export function genreChoices(type, lists) {
  if (type !== "either") return (lists[type] || []).map(g => g.name);
  const movie = (lists.movie || []).map(g => g.name);
  const tvOnly = (lists.tv || [])
    .map(g => g.name)
    .filter(n => !movie.includes(n) && !GENRE_EQUIV.movie[n]);
  return [...movie, ...tvOnly];
}

export const ERAS = [
  { id: "new", label: "Last 2 years" },
  { id: "2020s", label: "2020s" },
  { id: "2010s", label: "2010s" },
  { id: "2000s", label: "2000s" },
  { id: "older", label: "Before 2000" },
];

// { from, to } as "YYYY-MM-DD" (either may be null), or null for any era.
export function eraRange(eraId, now = new Date()) {
  switch (eraId) {
    case "new": {
      const from = new Date(now);
      from.setFullYear(from.getFullYear() - 2);
      return { from: from.toISOString().slice(0, 10), to: null };
    }
    case "2020s": return { from: "2020-01-01", to: "2029-12-31" };
    case "2010s": return { from: "2010-01-01", to: "2019-12-31" };
    case "2000s": return { from: "2000-01-01", to: "2009-12-31" };
    case "older": return { from: null, to: "1999-12-31" };
    default: return null;
  }
}
