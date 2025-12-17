import React, { useEffect, useState } from "react";
import { searchTMDB, posterUrl } from "../services/tmdb";

export default function AddTitle({ onSelect }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      return;
    }

    const t = setTimeout(async () => {
      const r = await searchTMDB(q);
      setResults(r.slice(0, 6));
    }, 400); // debounce

    return () => clearTimeout(t);
  }, [q]);

  return (
    <div className="search-container">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search movie or series..."
        className="search-input"
      />

      {results.length > 0 && (
        <div className="search-dropdown">
          <div className="search-results glass-panel">
          {results.map(r => (
            <div
              key={r.id}
              onClick={() => {
                onSelect(r);
                setQ("");
                setResults([]);
              }}
              className="search-result-row"
            >
              <img
                src={posterUrl(r.poster_path)}
                alt=""
                style={{ width: "40px", borderRadius: "4px" }}
              />
              <div>
                <div>{r.title || r.name}</div>
                <small className="search-result-meta">
                  {r.media_type.toUpperCase()}
                </small>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}
