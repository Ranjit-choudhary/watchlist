import React from "react";
import FlameRating from "./FlameRating";

export default function WatchCard({ item, onRate, onDelete }) {
  const pain =
    item.lastDate
      ? Math.floor(
          ((Date.now() - new Date(item.lastDate)) /
            (1000 * 60 * 60 * 24)) *
            item.eagerness
        )
      : 0;

  return (
    <div style={{
      background: "#161b22",
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative"
    }}>
      <button
        onClick={() => onDelete(item.id)}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "#da3633",
          border: "none",
          color: "#fff",
          borderRadius: "50%",
          width: "28px",
          height: "28px",
          cursor: "pointer"
        }}
      >
        ✕
      </button>

      <div style={{
        height: "260px",
        background: item.poster
          ? `url(${item.poster}) center/cover`
          : "#0d1117"
      }} />

      <div style={{ padding: "0.8rem" }}>
        <h3>{item.title}</h3>

        <FlameRating
          value={item.eagerness}
          onChange={v => onRate(item.id, v)}
        />

        <p style={{ fontSize: "0.8rem", color: "#f97316" }}>
          Pain: {pain}
        </p>

        <p style={{ color: "#8b949e", fontSize: "0.85rem" }}>
          {item.lastInfo}
        </p>

        <span style={{
          display: "inline-block",
          marginTop: "0.4rem",
          padding: "0.2rem 0.5rem",
          borderRadius: "6px",
          background: "#30363d",
          fontSize: "0.75rem"
        }}>
          {item.status}
        </span>
      </div>
    </div>
  );
}
