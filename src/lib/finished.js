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
