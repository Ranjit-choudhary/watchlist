// "The Vault": titles the user has finished, rated 1–10 and shown as a
// tier list (S–D), like the eagerness tiers on the main watchlist.

export const RATING_TIERS = [
  { id: "S", label: "Masterpiece", min: 9 },
  { id: "A", label: "Great", min: 7 },
  { id: "B", label: "Good", min: 5 },
  { id: "C", label: "Meh", min: 3 },
  { id: "D", label: "Skip it", min: 1 },
];

export const isFinished = item => !!item.finishedAt;

export function ratingTier(rating) {
  return RATING_TIERS.find(t => rating >= t.min) || RATING_TIERS[RATING_TIERS.length - 1];
}

// Tiers in S→D order (empty ones dropped), each sorted by rating, then most
// recently finished first.
export function groupByRatingTier(items) {
  const sorted = [...items].sort(
    (a, b) => (b.finalRating || 0) - (a.finalRating || 0) || (b.finishedAt || 0) - (a.finishedAt || 0)
  );
  return RATING_TIERS
    .map(tier => ({ tier, items: sorted.filter(i => ratingTier(i.finalRating || 0).id === tier.id) }))
    .filter(group => group.items.length > 0);
}

// Finished series stay on the new-episode check. `finishedSeasons` is the
// season count when the user finished it; TMDB adds a season as soon as it's
// announced, so a higher `totalSeasons` means the show is coming back.
// Returns null, or { state, season, date? } where state is
// "announced" (no date yet), "dated" (premiere date set) or "out" (airing).
const SEASON_PATTERN = /S(\d+)\s+E\d+/;
const seasonOf = info => Number(info?.match(SEASON_PATTERN)?.[1]) || 0;

export function vaultComeback(item) {
  if (item.type !== "tv" || !isFinished(item)) return null;
  const base = item.finishedSeasons;
  if (!base || !item.totalSeasons || item.totalSeasons <= base) return null;

  const aired = seasonOf(item.lastInfo);
  if (aired > base) return { state: "out", season: aired };

  const next = seasonOf(item.nextEpisodeInfo);
  if (next > base && item.nextEpisodeDate) {
    return { state: "dated", season: next, date: item.nextEpisodeDate };
  }
  return { state: "announced", season: base + 1 };
}

export function comebackLabel({ state, season, date }) {
  if (state === "out") return `Season ${season} is out`;
  if (state === "dated") {
    const when = new Date(`${date}T00:00:00`).toLocaleDateString(undefined, {
      month: "short", day: "numeric", year: "numeric",
    });
    return `Season ${season} premieres ${when}`;
  }
  return `Season ${season} announced`;
}
