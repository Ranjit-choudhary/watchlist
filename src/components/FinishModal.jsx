import React, { useState } from "react";
import { auth } from "../firebase";
import { updateWatch } from "../services/watchlist";
import { ratingTier } from "../lib/finished";
import { toast } from "../lib/toast";

// Asks for a 1–10 rating and moves the item into The Vault (or re-rates it
// if it's already there).
export default function FinishModal({ item, onClose }) {
  const [hover, setHover] = useState(null);
  const shown = hover ?? item.finalRating ?? null;

  const rate = async rating => {
    if (!auth.currentUser) return;
    const firstTime = !item.finishedAt;
    try {
      await updateWatch(auth.currentUser.uid, item.id, {
        finalRating: rating,
        finishedAt: item.finishedAt || Date.now(),
        // Baseline for spotting a new season later (lib/finished vaultComeback).
        ...(firstTime && item.type === "tv" ? { finishedSeasons: item.totalSeasons || null } : {}),
      });
      if (firstTime) toast(`"${item.title}" moved to The Vault (${rating}/10)`);
      onClose();
    } catch (e) {
      console.error("Failed to save rating:", e);
      toast("Couldn't save your rating. Please try again.", "error");
    }
  };

  return (
    <div className="modal-backdrop" onClick={e => { e.stopPropagation(); onClose(); }}>
      <div className="modal-panel glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            {item.finishedAt ? "Change rating" : "Finished it?"} — {item.title}
          </div>
          <button className="btn btn-ghost" type="button" onClick={onClose}>✕</button>
        </div>

        <div style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "0.75rem" }}>
          How would you rate it out of 10?
        </div>
        <div className="rating-grid">
          {Array.from({ length: 10 }, (_, i) => i + 1).map(r => (
            <button
              key={r}
              type="button"
              className={`rating-btn tier-${ratingTier(r).id} ${shown === r ? "active" : ""}`}
              onMouseEnter={() => setHover(r)}
              onMouseLeave={() => setHover(null)}
              onClick={() => rate(r)}
            >
              {r}
            </button>
          ))}
        </div>
        <div style={{ minHeight: "1.4rem", marginTop: "0.6rem", fontSize: "0.85rem", color: "#9ca3af", textAlign: "center" }}>
          {shown ? `${ratingTier(shown).id} tier · ${ratingTier(shown).label}` : ""}
        </div>
      </div>
    </div>
  );
}
