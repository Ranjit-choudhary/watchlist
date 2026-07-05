import React, { useState, useMemo } from "react";

export default function NewEpisodesPage({ items, onUpdateWatched, onNavigateBack }) {
  const [sortBy, setSortBy] = useState("airing"); // "airing", "tier", "name"

  const sorted = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "airing") {
        const dateA = a.nextEpisodeDate || "9999-99-99";
        const dateB = b.nextEpisodeDate || "9999-99-99";
        return dateA.localeCompare(dateB);
      }
      if (sortBy === "tier") return (b.eagerness || 0) - (a.eagerness || 0);
      return (a.title || "").localeCompare(b.title || "");
    });
  }, [items, sortBy]);

  const getCountdown = (dateStr) => {
    if (!dateStr) return null;
    const target = new Date(dateStr);
    const now = new Date();
    const diffMs = target - now;
    if (diffMs < 0) return "Already aired";
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today!";
    if (days === 1) return "Tomorrow";
    if (days < 7) return `In ${days} days`;
    if (days < 30) return `In ${Math.floor(days / 7)} week${Math.floor(days / 7) > 1 ? "s" : ""}`;
    return `In ${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? "s" : ""}`;
  };

  const handleMarkCaughtUp = (item) => {
    if (!item.lastInfo) return;
    const match = item.lastInfo.match(/S(\d+)\s+E(\d+)/);
    if (!match) return;
    const [, season, episode] = match.map(Number);
    onUpdateWatched(item.id, { watchedSeason: season, watchedEpisode: episode });
  };

  return (
    <div className="new-episodes-page">
      {/* Header */}
      <div className="nep-header">
        <button className="nep-back-btn" onClick={onNavigateBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="nep-header-content">
          <h1 className="nep-title">
            <span className="nep-title-icon">📺</span>
            New Episodes
            <span className="nep-count-badge">{items.length}</span>
          </h1>
          <p className="nep-subtitle">
            Shows with unwatched episodes you need to catch up on
          </p>
        </div>
        <div className="nep-sort">
          <label className="nep-sort-label">Sort by</label>
          <div className="nep-sort-pills">
            {[
              { value: "airing", label: "Airing Date" },
              { value: "tier", label: "Tier" },
              { value: "name", label: "Name" },
            ].map(opt => (
              <button
                key={opt.value}
                className={`nep-sort-pill ${sortBy === opt.value ? "active" : ""}`}
                onClick={() => setSortBy(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      {sorted.length === 0 ? (
        <div className="nep-empty">
          <div className="nep-empty-icon">🎉</div>
          <div className="nep-empty-title">All caught up!</div>
          <div className="nep-empty-text">
            You've watched all available episodes. Check back later for updates.
          </div>
          <button className="btn btn-outline" onClick={onNavigateBack}>
            Back to Watchlist
          </button>
        </div>
      ) : (
        <div className="nep-grid">
          {sorted.map(item => {
            // Parse watched vs latest
            const latestMatch = item.lastInfo?.match(/S(\d+)\s+E(\d+)/);
            const latestSeason = latestMatch ? parseInt(latestMatch[1]) : null;
            const latestEpisode = latestMatch ? parseInt(latestMatch[2]) : null;

            const tierEmoji = ["", "🔥", "🔥🔥", "🔥🔥🔥", "🔥🔥🔥🔥", "🔥🔥🔥🔥🔥"][item.eagerness || 0];
            const countdown = getCountdown(item.nextEpisodeDate);

            return (
              <div key={item.id} className="nep-card glass-panel">
                {/* Poster */}
                <div className="nep-card-poster">
                  {item.poster && (
                    <img src={item.poster} alt={item.title} />
                  )}
                  {item.rating && (
                    <div className="nep-card-rating">⭐ {item.rating.toFixed(1)}</div>
                  )}
                </div>

                {/* Info */}
                <div className="nep-card-body">
                  <div className="nep-card-title">{item.title}</div>
                  <div className="nep-card-tier">{tierEmoji}</div>

                  {/* Episode comparison */}
                  <div className="nep-episode-compare">
                    <div className="nep-ep-row nep-ep-watched">
                      <span className="nep-ep-label">Watched</span>
                      <span className="nep-ep-value">
                        {item.watchedSeason
                          ? `S${item.watchedSeason}${item.watchedEpisode ? ` E${item.watchedEpisode}` : ""}`
                          : "Not set"}
                      </span>
                    </div>
                    <div className="nep-ep-arrow">↓</div>
                    <div className="nep-ep-row nep-ep-latest">
                      <span className="nep-ep-label">Latest</span>
                      <span className="nep-ep-value">
                        {latestSeason ? `S${latestSeason} E${latestEpisode}` : "Unknown"}
                      </span>
                    </div>
                  </div>

                  {/* Next airing */}
                  {item.nextEpisodeDate && (
                    <div className="nep-next-airing">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>
                        Next: {new Date(item.nextEpisodeDate).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric"
                        })}
                      </span>
                      {countdown && (
                        <span className="nep-countdown">{countdown}</span>
                      )}
                    </div>
                  )}
                  {item.nextEpisodeInfo && (
                    <div className="nep-next-ep-info">
                      Next episode: {item.nextEpisodeInfo}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="nep-card-actions">
                    <button
                      className="btn btn-primary nep-catchup-btn"
                      onClick={() => handleMarkCaughtUp(item)}
                    >
                      ✓ Mark Caught Up
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
