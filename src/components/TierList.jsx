import React, { useState } from "react";
import Grid from "./Grid";

const TIERS = [
  { value: 5, label: "🔥🔥🔥🔥🔥 Can't Wait" },
  { value: 4, label: "🔥🔥🔥🔥 Very Eager" },
  { value: 3, label: "🔥🔥🔥 Interested" },
  { value: 2, label: "🔥🔥 Casual" },
  { value: 1, label: "🔥 Low Priority" }
];

export default function TierList({ items, onRate, onDelete, onUpdateWatched, viewMode = "grid", calendarEnabled = false, allItems = [], onSelectTitle }) {
  const [dragged, setDragged] = useState(null);

  // Check if item has new unwatched episodes
  const hasNewUnwatched = (item) => {
    if (item.type !== "tv" || !item.lastInfo) return false;
    if (!item.watchedSeason) return false;
    const match = item.lastInfo.match(/S(\d+)\s+E(\d+)/);
    if (!match) return false;
    const [, lastSeason, lastEpisode] = match.map(Number);
    if (lastSeason > item.watchedSeason) return true;
    if (lastSeason === item.watchedSeason && item.watchedEpisode && lastEpisode > item.watchedEpisode) return true;
    return false;
  };

  // Sort items: new unwatched first, then by updatedAt
  const sortTierItems = (tierItems) => {
    return [...tierItems].sort((a, b) => {
      const aHasNew = hasNewUnwatched(a);
      const bHasNew = hasNewUnwatched(b);
      
      // Items with new unwatched episodes come first
      if (aHasNew && !bHasNew) return -1;
      if (!aHasNew && bHasNew) return 1;
      
      // If both have new or both don't, sort by updatedAt (newest first)
      return (b.updatedAt || 0) - (a.updatedAt || 0);
    });
  };

  return (
    <div className="tier-list">
      {TIERS.map(tier => {
        const tierItems = items.filter(i => i.eagerness === tier.value);
        const sortedTierItems = sortTierItems(tierItems);
        if (!sortedTierItems.length) return null;

        return (
          <div
            key={tier.value}
            className="tier"
            /* Desktop drag */
            onDragOver={e => e.preventDefault()}
            onDrop={() => {
              if (dragged && dragged.eagerness !== tier.value) {
                onRate(dragged.id, tier.value);
              }
              setDragged(null);
            }}

            /* Mobile support */
            onTouchMove={e => e.preventDefault()}
          >
            <div className="tier-header">
              <h2 className="tier-title">{tier.label}</h2>
              <span className="tier-chip glass-chip">Tier {tier.value}</span>
            </div>

            <Grid
              items={sortedTierItems}
              onDelete={onDelete}
              onDrag={setDragged}
              onRate={onRate}
              onUpdateWatched={onUpdateWatched}
              viewMode={viewMode}
              calendarEnabled={calendarEnabled}
              allItems={allItems}
              onSelectTitle={onSelectTitle}
            />
          </div>
        );
      })}
    </div>
  );
}
