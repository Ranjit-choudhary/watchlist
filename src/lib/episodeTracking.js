// Parses the "S<season> E<episode>" label TMDB-derived data is stored as
// (see App.jsx's addFromTMDB/refreshAll) and compares it against what the
// user has marked watched, to decide whether a TV item has unwatched
// episodes available.
const LAST_INFO_PATTERN = /S(\d+)\s+E(\d+)/;

export function isUnwatched(item) {
  if (item.type !== "tv" || !item.lastInfo) return false;
  if (!item.watchedSeason) return false; // null/0 = not tracking

  const match = item.lastInfo.match(LAST_INFO_PATTERN);
  if (!match) return false;

  const [, lastSeason, lastEpisode] = match.map(Number);
  if (lastSeason > item.watchedSeason) return true;
  if (
    lastSeason === item.watchedSeason &&
    item.watchedEpisode &&
    lastEpisode > item.watchedEpisode
  ) {
    return true;
  }
  return false;
}
