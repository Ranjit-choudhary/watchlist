// Decides whether an item needs a TMDB check on the automatic refresh.
// The point is to skip titles where nothing can have changed: a show whose
// next episode airs next month doesn't need checking today.
//
// Each check stamps `lastCheckedAt` on the item; the intervals below are how
// long to wait after the last check, depending on what we already know.

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

export const RECHECK = {
  dueNow: 12 * HOUR,      // air/release date has arrived — TMDB may lag a bit
  scheduled: 7 * DAY,     // date is in the future — only catch reschedules
  unannounced: 3 * DAY,   // returning show, no next date yet
  finished: 30 * DAY,     // ended/canceled show, or already-released movie
};

// TMDB dates are "YYYY-MM-DD"; treat them as available from that day.
function dateHasArrived(dateStr, now) {
  const t = Date.parse(dateStr);
  return !Number.isNaN(t) && t <= now;
}

export function recheckInterval(item, now = Date.now()) {
  if (item.type === "tv") {
    if (item.nextEpisodeDate) {
      return dateHasArrived(item.nextEpisodeDate, now) ? RECHECK.dueNow : RECHECK.scheduled;
    }
    if (item.showStatus === "Ended" || item.showStatus === "Canceled") {
      return RECHECK.finished;
    }
    return RECHECK.unannounced;
  }
  // Movies: lastDate holds the release date.
  if (item.lastDate && !dateHasArrived(item.lastDate, now)) return RECHECK.scheduled;
  if (item.lastDate && now - Date.parse(item.lastDate) < RECHECK.scheduled) return RECHECK.dueNow;
  return RECHECK.finished;
}

export function needsCheck(item, now = Date.now()) {
  if (!item.lastCheckedAt) return true;

  // A scheduled date that has passed since the last check always triggers one,
  // however recently we looked.
  const upcoming = item.type === "tv" ? item.nextEpisodeDate : item.lastDate;
  if (upcoming && dateHasArrived(upcoming, now) && Date.parse(upcoming) > item.lastCheckedAt) {
    return true;
  }

  return now - item.lastCheckedAt >= recheckInterval(item, now);
}
