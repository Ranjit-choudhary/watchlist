import React from "react";
import WatchCard from "./WatchCard";
import EmptyState from "./EmptyState";

export default function Grid({ items, onDelete, onDrag, onRate, onUpdateWatched, viewMode = "grid", calendarEnabled = false, allItems = [], onSelectTitle }) {
  if (!items.length) return <EmptyState />;

  if (viewMode === "list") {
    return (
      <div className="tier-list-view">
        {items.map(item => (
          <div key={item.id} className="list-item">
            <WatchCard
              item={item}
              onDelete={onDelete}
              onDrag={onDrag}
              onRate={onRate}
              onUpdateWatched={onUpdateWatched}
              viewMode="list"
              calendarEnabled={calendarEnabled}
              allItems={allItems}
              onSelectTitle={onSelectTitle}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="tier-grid">
      {items.map(item => (
        <WatchCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onDrag={onDrag}
          onRate={onRate}
          onUpdateWatched={onUpdateWatched}
          viewMode="grid"
          calendarEnabled={calendarEnabled}
          allItems={allItems}
          onSelectTitle={onSelectTitle}
        />
      ))}
    </div>
  );
}
