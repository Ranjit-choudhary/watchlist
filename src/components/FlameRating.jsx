import React, { useState } from "react";
export default function FlameRating({ value, onChange }) {
  return (
    <div>
      {[1,2,3,4,5].map(n => (
        <span
          key={n}
          onClick={() => onChange(n)}
          style={{
            fontSize: "1.2rem",
            cursor: "pointer",
            color: n <= value ? "#f97316" : "#444"
          }}
        >
          🔥
        </span>
      ))}
    </div>
  );
}
