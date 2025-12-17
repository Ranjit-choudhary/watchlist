import React from "react";
import WatchCard from "./WatchCard";
import EmptyState from "./EmptyState";

export default function Grid({ items, onRate, onDelete }) {
  if (!items.length) return <EmptyState />;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.2rem",
        padding: "1rem"
      }}
    >
      {items.map(item => (
        <WatchCard
          key={item.id}
          item={item}
          onRate={onRate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
