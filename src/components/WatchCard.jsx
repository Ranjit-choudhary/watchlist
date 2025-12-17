import React, { useRef } from "react";

export default function WatchCard({ item, onDelete, onDrag }) {
  return (
    <div
  draggable
  onDragStart={() => onDrag(item)}

  onTouchStart={() => {
    timerRef.current = setTimeout(() => {
      onDrag(item);
    }, 300); // long press
  }}

  onTouchEnd={() => {
    clearTimeout(timerRef.current);
  }}

  onTouchMove={() => {
    clearTimeout(timerRef.current);
  }}

  className={`card ${item.status === "new" ? "new" : ""}`}
  style={{
    background: "#161b22",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative"
  }}
>

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
          width: "32px",
          height: "32px",
          cursor: "pointer"
        }}
      >
        ✕
      </button>

      <div
        style={{
          height: "240px",
          background: item.poster
            ? `url(${item.poster}) center/cover`
            : "#0d1117"
        }}
      />

      <div style={{ padding: "0.8rem" }}>
        <h3 style={{ margin: 0 }}>{item.title}</h3>

        <p style={{ color: "#8b949e", fontSize: "0.85rem" }}>
          {item.lastInfo}
        </p>

        {item.status === "new" && (
          <span style={{
            display: "inline-block",
            marginTop: "0.4rem",
            padding: "0.2rem 0.5rem",
            borderRadius: "6px",
            background: "#238636",
            fontSize: "0.75rem"
          }}>
            NEW
          </span>
        )}
      </div>
    </div>
  );
}
