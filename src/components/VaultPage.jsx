import React, { useState } from "react";
import { groupByRatingTier } from "../lib/finished";
import FinishModal from "./FinishModal";

export default function VaultPage({ items, onMoveBack, onDelete, onNavigateBack }) {
  const [rating, setRating] = useState(null);
  const groups = groupByRatingTier(items);

  return (
    <div className="tier-list">
      <div className="vault-header">
        <div>
          <h1 className="vault-title">🎞️ The Vault</h1>
          <p className="vault-subtitle">
            Everything you've finished, ranked by your rating.
          </p>
        </div>
        <button type="button" className="btn btn-outline" onClick={onNavigateBack}>
          ← Back to watchlist
        </button>
      </div>

      {groups.length === 0 ? (
        <div className="empty-state-container">
          <div className="empty-state-icon">🎞️</div>
          <div className="empty-state-text">Nothing in The Vault yet</div>
          <div className="empty-state-subtext">
            Finished something? Hit ✓ on its card, rate it, and it lands here.
          </div>
        </div>
      ) : (
        groups.map(({ tier, items: tierItems }) => (
          <div key={tier.id} className={`tier tier-${tier.id}`}>
            <div className="tier-header">
              <h2 className="tier-title">
                <span className="vault-tier-badge">{tier.id}</span>
                {tier.label}
              </h2>
              <span className="tier-chip glass-chip">{tierItems.length}</span>
            </div>
            <div className="vault-grid">
              {tierItems.map(item => (
                <div key={item.id} className={`vault-card tier-${tier.id}`}>
                  <div
                    className="vault-card-poster"
                    style={item.poster ? { backgroundImage: `url(${item.poster})` } : undefined}
                  />
                  <span className="vault-card-score">{item.finalRating}/10</span>
                  <button
                    type="button"
                    className="vault-card-remove"
                    onClick={() => onDelete(item.id)}
                    title="Remove completely"
                    aria-label="Remove completely"
                  >
                    ✕
                  </button>
                  <div className="vault-card-body">
                    <div className="vault-card-title" title={item.title}>{item.title}</div>
                    <div className="vault-card-meta">
                      {item.type === "tv" ? "Series" : "Movie"} · finished{" "}
                      {new Date(item.finishedAt).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                    </div>
                    <div className="vault-card-actions">
                      <button type="button" onClick={() => setRating(item)} title="Change your rating">
                        ★ Re-rate
                      </button>
                      <button type="button" onClick={() => onMoveBack(item.id)} title="Move back to your watchlist">
                        ↩ Watchlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      {rating && <FinishModal item={rating} onClose={() => setRating(null)} />}
    </div>
  );
}
