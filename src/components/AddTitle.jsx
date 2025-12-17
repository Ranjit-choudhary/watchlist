import React, { useState } from "react";
import { searchTMDB } from "../services/tmdb";

export default function AddTitle({ onSelect }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    if (!q.trim()) return;
    const r = await searchTMDB(q);
    setResults(r.slice(0, 5));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search movie or series"
        style={{
          padding: "0.6rem",
          width: "60%",
          background: "#161b22",
          color: "#fff",
          border: "1px solid #30363d"
        }}
      />
      <button
        onClick={search}
        style={{
          marginLeft: "0.5rem",
          padding: "0.6rem",
          background: "#f97316",
          border: "none"
        }}
      >
        Search
      </button>

      {results.map(r => (
        <div
          key={r.id}
          onClick={() => {
            onSelect(r);
            setResults([]);
            setQ("");
          }}
          style={{
            cursor: "pointer",
            marginTop: "0.5rem",
            padding: "0.5rem",
            background: "#0d1117",
            border: "1px solid #30363d"
          }}
        >
          {r.title || r.name} ({r.media_type})
        </div>
      ))}
    </div>
  );
}
