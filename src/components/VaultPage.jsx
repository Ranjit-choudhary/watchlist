import React, { useState } from "react";
import { groupByRatingTier, ratingTier, vaultComeback, comebackLabel } from "../lib/finished";
import FinishModal from "./FinishModal";

export default function VaultPage({ items, onMoveBack, onIgnoreComeback, onDelete, onNavigateBack }) {
  const [rating, setRating] = useState(null);
  const groups = groupByRatingTier(items);
  const comebacks = items
    .map(item => ({ item, comeback: vaultComeback(item) }))
    .filter(c => c.comeback);

  const card = (item, comeback) => (
    <VaultCard
      key={item.id}
      item={item}
      comeback={comeback}
      onRerate={() => setRating(item)}
      onMoveBack={() => onMoveBack(item.id)}
      onIgnore={() => onIgnoreComeback(item.id)}
      onDelete={() => onDelete(item.id)}
    />
  );

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

      {comebacks.length > 0 && (
        <div className="tier vault-comebacks">
          <div className="tier-header">
            <h2 className="tier-title">📣 Coming back</h2>
            <span className="tier-chip glass-chip">{comebacks.length}</span>
          </div>
          <p className="vault-subtitle vault-comebacks-hint">
            You finished these, but there's a new season. Move one back to your
            watchlist to track it.
          </p>
          <div className="vault-grid">
            {comebacks.map(({ item, comeback }) => card(item, comeback))}
          </div>
        </div>
      )}

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
              {tierItems.map(item => card(item, vaultComeback(item)))}
            </div>
          </div>
        ))
      )}

      {rating && <FinishModal item={rating} onClose={() => setRating(null)} />}
    </div>
  );
}

function VaultCard({ item, comeback, onRerate, onMoveBack, onIgnore, onDelete }) {
  const tier = ratingTier(item.finalRating || 0);
  return (
    <div className={`vault-card tier-${tier.id} ${comeback ? "vault-card-comeback" : ""}`}>
      <div
        className="vault-card-poster"
        style={item.poster ? { backgroundImage: `url(${item.poster})` } : undefined}
      />
      <span className="vault-card-score">{item.finalRating}/10</span>
      <button
        type="button"
        className="vault-card-remove"
        onClick={onDelete}
        title="Remove completely"
        aria-label="Remove completely"
      >
        ✕
      </button>
      <div className="vault-card-body">
        <div className="vault-card-title" title={item.title}>{item.title}</div>
        {comeback ? (
          <div className="vault-card-news">{comebackLabel(comeback)}</div>
        ) : (
          <div className="vault-card-meta">
            {item.type === "tv" ? "Series" : "Movie"} · finished{" "}
            {new Date(item.finishedAt).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
          </div>
        )}
        <div className="vault-card-actions">
          {comeback ? (
            <button type="button" onClick={onIgnore} title="Not watching it — stop flagging this season">
              Ignore
            </button>
          ) : (
            <button type="button" onClick={onRerate} title="Change your rating">
              ★ Re-rate
            </button>
          )}
          <button type="button" onClick={onMoveBack} title="Move back to your watchlist">
            ↩ Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
