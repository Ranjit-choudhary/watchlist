const API_KEY = "4bb9fd44f0907b5158c6a6db356c360e";
const BASE = "https://api.themoviedb.org/3";

export async function searchTMDB(query) {
  const res = await fetch(
    `${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  return data.results.filter(
    r => r.media_type === "movie" || r.media_type === "tv"
  );
}

export async function getDetails(type, id) {
  const res = await fetch(`${BASE}/${type}/${id}?api_key=${API_KEY}`);
  return res.json();
}

export function posterUrl(path) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : null;
}
