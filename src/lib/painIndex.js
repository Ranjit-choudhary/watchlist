// "Pain index" ranks how overdue an item feels: days since its last known
// date, scaled by how eager the user is to watch it. Used as the default
// sort in App.jsx.
export function painIndex(item) {
  if (!item.lastDate) return 0;
  const daysSince = (Date.now() - new Date(item.lastDate)) / (1000 * 60 * 60 * 24);
  return Math.floor(daysSince * item.eagerness);
}
