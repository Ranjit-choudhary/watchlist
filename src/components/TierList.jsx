import React, { useState } from "react";
import Grid from "./Grid";

const TIERS = [
  { value: 5, label: "🔥🔥🔥🔥🔥 Can’t Wait" },
  { value: 4, label: "🔥🔥🔥🔥 Very Eager" },
  { value: 3, label: "🔥🔥🔥 Interested" },
  { value: 2, label: "🔥🔥 Casual" },
  { value: 1, label: "🔥 Low Priority" }
];

export default function TierList({ items, onRate, onDelete }) {
  const [dragged, setDragged] = useState(null);

  return (
    <div style={{ padding: "1rem" }}>
      {TIERS.map(tier => {
        const tierItems = items.filter(i => i.eagerness === tier.value);
        if (!tierItems.length) return null;

        return (
          <div
            key={tier.value}
            className="tier"
            style={{ marginBottom: "2rem" }}

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
            <h2 style={{ marginBottom: "0.8rem" }}>
              {tier.label}
            </h2>

            <Grid
              items={tierItems}
              onDelete={onDelete}
              onDrag={setDragged}
            />
          </div>
        );
      })}
    </div>
  );
}
