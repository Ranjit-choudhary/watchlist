import React, { useRef, useState } from "react";
import { getDetails, getVideos } from "../services/tmdb";

export default function WatchCard({ item, onDelete, onDrag, onUpdateWatched, viewMode = "grid", calendarEnabled = false }) {
  const timerRef = useRef(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showWatchedModal, setShowWatchedModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [summary, setSummary] = useState(item.overview || null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [details, setDetails] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const lastLabel =
    item.type === "tv"
      ? item.lastInfo || "No recent episode"
      : item.lastDate || item.lastInfo || "—";

  // Check if card should glow based on watched status (season-only comparison)
  const shouldGlow = () => {
    if (item.type !== "tv" || !item.lastInfo || !item.watchedSeason) return false;
    // Parse lastInfo format: "S2 E5"
    const match = item.lastInfo.match(/S(\d+)\s+E(\d+)/);
    if (!match) return false;
    const [, lastSeason] = match.map(Number);
    // Glow if latest season is beyond what user has watched
    return lastSeason > item.watchedSeason;
  };

  const isGlowing = shouldGlow();

  // Get max season from totalSeasons, details, or lastInfo as fallback
  const getMaxSeason = () => {
    if (item.totalSeasons) {
      return item.totalSeasons;
    }
    if (details?.number_of_seasons) {
      return details.number_of_seasons;
    }
    if (item.lastInfo) {
      const match = item.lastInfo.match(/S(\d+)/);
      if (match) {
        const fromInfo = parseInt(match[1]) || 1;
        return Math.max(fromInfo, 1);
      }
    }
    return 1;
  };

  const maxSeason = getMaxSeason();
  const seasons = Array.from({ length: maxSeason }, (_, i) => i + 1);

  const handleMarkWatched = (season) => {
    if (onUpdateWatched) {
      // Set episode to 0 to indicate watched all episodes of that season
      onUpdateWatched(item.id, { watchedSeason: season, watchedEpisode: 0 });
    }
    setShowWatchedModal(false);
  };

  const handleInfoClick = async (e) => {
    e.stopPropagation();
    setShowSummaryModal(true);
    
    // Fetch full details and trailer if not already loaded
    if (!details && !loadingSummary) {
      setLoadingSummary(true);
      try {
        const [fetchedDetails, videoKey] = await Promise.all([
          getDetails(item.type, item.tmdbId),
          getVideos(item.type, item.tmdbId)
        ]);
        setDetails(fetchedDetails);
        setSummary(fetchedDetails.overview || "No summary available.");
        setTrailerKey(videoKey);
      } catch (error) {
        console.error("Failed to fetch details:", error);
        setSummary("Failed to load summary.");
      } finally {
        setLoadingSummary(false);
      }
    } else if (summary && !details) {
      // If we have summary but not full details, still fetch trailer
      try {
        const videoKey = await getVideos(item.type, item.tmdbId);
        setTrailerKey(videoKey);
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    }
  };

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <>
      <div
        draggable
        onDragStart={() => onDrag(item)}
        onMouseEnter={() => {
          setShowDelete(true);
          setShowInfo(true);
        }}
        onMouseLeave={() => {
          setShowDelete(false);
          setShowInfo(false);
        }}
        onTouchStart={() => {
          timerRef.current = setTimeout(() => {
            onDrag(item);
          }, 300);
        }}
        onTouchEnd={() => clearTimeout(timerRef.current)}
        onTouchMove={() => clearTimeout(timerRef.current)}
        className={`card glass-panel ${isGlowing ? "glow-new" : ""} ${viewMode === "list" ? "card-list" : ""}`}
        style={{
          overflow: "hidden",
          position: "relative",
          cursor: "pointer"
        }}
        onClick={() => item.type === "tv" && setShowWatchedModal(true)}
      >
        <div className="card-poster" style={{
          backgroundImage: item.poster ? `url(${item.poster})` : undefined
        }}>
          {item.rating ? (
            <div className="card-badge rating-badge">
              ⭐ {item.rating.toFixed(1)}
            </div>
          ) : null}
          <div className="card-poster-overlay" />

          {item.lastInfo || item.lastDate ? (
            <div className="card-badge corner bottom-right">
              {lastLabel}
            </div>
          ) : null}

          {isGlowing && (
            <div className="card-badge corner bottom-left card-tag-new">
              NEW
            </div>
          )}
        </div>

        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-subline">
            {item.type?.toUpperCase()}
          </p>
          {item.watchedSeason && item.type === "tv" && (
            <div className="card-watched-info">
              Watched: Season {item.watchedSeason}
            </div>
          )}
        </div>

        <button
          onClick={e => {
            e.stopPropagation();
            onDelete(item.id);
          }}
          className={`card-delete-btn ${showDelete ? "visible" : ""}`}
          aria-label="Delete"
        >
          ✕
        </button>

        <button
          onClick={handleInfoClick}
          className={`card-info-btn ${showInfo ? "visible" : ""}`}
          aria-label="Info"
        >
          i
        </button>
      </div>

      {/* Watched Modal */}
      {showWatchedModal && item.type === "tv" && (
        <div className="modal-backdrop" onClick={() => setShowWatchedModal(false)}>
          <div className="modal-panel glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Mark Watched - {item.title}</div>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => setShowWatchedModal(false)}
              >
                ✕
              </button>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <div style={{ marginBottom: "0.75rem", fontSize: "0.9rem", opacity: 0.9 }}>
                Select the last season you've watched:
              </div>
              <div className="season-buttons-grid">
                {seasons.map(season => (
                  <button
                    key={season}
                    type="button"
                    className={`season-button ${item.watchedSeason === season ? "season-button-active" : ""}`}
                    onClick={() => handleMarkWatched(season)}
                  >
                    Season {season}
                  </button>
                ))}
              </div>
            </div>

            {calendarEnabled && (
              <div style={{ marginBottom: "1rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ marginBottom: "0.75rem", fontSize: "0.9rem", opacity: 0.9 }}>
                  Set a reminder for next episode:
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input
                    type="date"
                    id={`calendar-date-${item.id}`}
                    defaultValue={item.lastDate ? new Date(item.lastDate).toISOString().split('T')[0] : ""}
                    style={{
                      flex: 1,
                      padding: "0.5rem",
                      background: "rgba(15,23,42,0.9)",
                      border: "1px solid rgba(148,163,184,0.4)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.85rem"
                    }}
                  />
                  <input
                    type="time"
                    id={`calendar-time-${item.id}`}
                    defaultValue="20:00"
                    style={{
                      padding: "0.5rem",
                      background: "rgba(15,23,42,0.9)",
                      border: "1px solid rgba(148,163,184,0.4)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "0.85rem"
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-youtube"
                  style={{ width: "100%" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const dateInput = document.getElementById(`calendar-date-${item.id}`);
                    const timeInput = document.getElementById(`calendar-time-${item.id}`);
                    const selectedDate = dateInput.value;
                    const selectedTime = timeInput.value;
                    
                    if (!selectedDate) {
                      alert("Please select a date");
                      return;
                    }

                    // Create Google Calendar event
                    const eventTitle = `Watch: ${item.title} - Season ${item.watchedSeason || maxSeason}`;
                    const eventDescription = item.overview || `TV Series - Next episode reminder`;
                    const startDateTime = `${selectedDate}T${selectedTime}:00`;
                    const endDateTime = new Date(new Date(startDateTime).getTime() + 60 * 60 * 1000).toISOString().replace(/\.\d{3}Z$/, "");
                    
                    // Google Calendar URL
                    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent(eventDescription)}&dates=${startDateTime.replace(/[-:]/g, "")}/${endDateTime.replace(/[-:]/g, "")}`;
                    
                    window.open(calendarUrl, "_blank");
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "0.5rem" }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Add to Google Calendar
                </button>
              </div>
            )}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowWatchedModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Summary Modal */}
      {showSummaryModal && (
        <div className="modal-backdrop" onClick={() => setShowSummaryModal(false)}>
          <div className="modal-panel glass-panel summary-modal" onClick={e => e.stopPropagation()}>
            <button
              className="summary-modal-close"
              type="button"
              onClick={() => setShowSummaryModal(false)}
              aria-label="Close"
            >
              ✕
            </button>

            {loadingSummary ? (
              <div className="summary-loading">
                <div className="summary-loading-spinner"></div>
                <p>Loading details...</p>
              </div>
            ) : (
              <>
                <div className="summary-header">
                  {item.poster && (
                    <div className="summary-poster">
                      <img src={item.poster} alt={item.title} />
                    </div>
                  )}
                  <div className="summary-header-content">
                    <h2 className="summary-title">{item.title}</h2>
                    <div className="summary-meta">
                      {item.rating && (
                        <span className="summary-rating">
                          ⭐ {item.rating.toFixed(1)} / 10
                        </span>
                      )}
                      {details?.release_date && (
                        <span className="summary-date">
                          {new Date(details.release_date).getFullYear()}
                        </span>
                      )}
                      {details?.runtime && (
                        <span className="summary-runtime">
                          {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
                        </span>
                      )}
                      {details?.number_of_seasons && (
                        <span className="summary-seasons">
                          {details.number_of_seasons} Season{details.number_of_seasons !== 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    {details?.genres && details.genres.length > 0 && (
                      <div className="summary-genres">
                        {details.genres.slice(0, 3).map(genre => (
                          <span key={genre.id} className="summary-genre-tag">
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="summary-content">
                  <h3 className="summary-section-title">Overview</h3>
                  <p className="summary-text">
                    {summary || "No summary available."}
                  </p>
                </div>

                {trailerKey && (
                  <div className="summary-trailer-section">
                    <button
                      type="button"
                      className="btn btn-youtube"
                      onClick={toggleTrailer}
                    >
                      <span className="youtube-icon">▶</span>
                      {showTrailer ? "Hide Trailer" : "Watch Trailer"}
                    </button>
                    {showTrailer && (
                      <div className="youtube-embed">
                        <iframe
                          src={`https://www.youtube.com/embed/${trailerKey}`}
                          title="Trailer"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="summary-footer">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setShowSummaryModal(false);
                      setShowTrailer(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
