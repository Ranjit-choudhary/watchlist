import React from "react";
import WatchCard from "./WatchCard";
import EmptyState from "./EmptyState";

export default function Grid({ items, onDelete, onDrag }) {
  if (!items.length) return <EmptyState />;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "1rem"
      }}
    >
      {items.map(item => (
        <WatchCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onDrag={onDrag}
        />
      ))}
    </div>
  );
}
