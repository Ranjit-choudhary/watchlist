import React, { useRef, useState } from "react";
import {
  getDetails,
  getVideos,
  getRecommendations,
  getCollection,
  getSeasonEpisodeCounts,
  extractUpcomingInfo,
  hasUpcomingWithinMonths,
  posterUrl
} from "../services/tmdb";
import { updateWatch } from "../services/watchlist";
import { auth } from "../firebase";

export default function WatchCard({ item, onDelete, onDrag, onUpdateWatched, viewMode = "grid", calendarEnabled = false, allItems = [], onSelectTitle }) {
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

  // New: Episode picker state
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [episodeCounts, setEpisodeCounts] = useState(item.seasonEpisodeCounts || {});
  const [loadingEpisodes, setLoadingEpisodes] = useState(false);

  // New: Recommendations
  const [recommendations, setRecommendations] = useState(null);
  const [collectionData, setCollectionData] = useState(null);
  const [loadingRecs, setLoadingRecs] = useState(false);

  // New: Upcoming info
  const [upcomingInfo, setUpcomingInfo] = useState(null);

  const lastLabel =
    item.type === "tv"
      ? item.lastInfo || "No recent episode"
      : item.lastDate || item.lastInfo || "—";

  // Check if card should have GREEN glow (unwatched new episodes)
  const shouldGlow = () => {
    if (item.type !== "tv" || !item.lastInfo) return false;
    if (!item.watchedSeason) return false;
    const match = item.lastInfo.match(/S(\d+)\s+E(\d+)/);
    if (!match) return false;
    const [, lastSeason, lastEpisode] = match.map(Number);
    if (lastSeason > item.watchedSeason) return true;
    if (lastSeason === item.watchedSeason && item.watchedEpisode && lastEpisode > item.watchedEpisode) return true;
    return false;
  };

  // Check if card should have YELLOW glow (upcoming within 12 months, caught up)
  const shouldGlowUpcoming = () => {
    if (item.type !== "tv") return false;
    if (shouldGlow()) return false; // green takes priority
    
    const targetDateStr = item.nextEpisodeDate || upcomingInfo?.date;
    if (!targetDateStr) return false;
    
    const nextDate = new Date(targetDateStr);
    // Set to end of the day to ensure we don't miss shows airing "today"
    nextDate.setHours(23, 59, 59, 999);
    
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() + 12);
    return nextDate <= cutoff && nextDate >= new Date();
  };

  const isGlowing = shouldGlow();
  const isUpcoming = shouldGlowUpcoming();

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

  const handleMarkWatched = (season, episode = null) => {
    if (onUpdateWatched) {
      onUpdateWatched(item.id, {
        watchedSeason: season,
        watchedEpisode: episode
      });
    }
    if (!episode) {
      // If only season selected, keep modal open for episode selection
      return;
    }
    setShowWatchedModal(false);
    setSelectedSeason(null);
  };

  const handleToggleBucket = async (e) => {
    e.stopPropagation();
    if (!auth.currentUser) return;
    const isAdded = !!item.addedToBucketAt;
    await updateWatch(auth.currentUser.uid, item.id, {
      addedToBucketAt: isAdded ? null : Date.now()
    });
  };

  const handleSeasonSelect = async (season) => {
    setSelectedSeason(season);
    // Update watched season immediately
    if (onUpdateWatched) {
      onUpdateWatched(item.id, {
        watchedSeason: season,
        watchedEpisode: null
      });
    }

    // Fetch episode counts if not available
    if (!episodeCounts[season] && item.tmdbId) {
      setLoadingEpisodes(true);
      try {
        const counts = await getSeasonEpisodeCounts(item.tmdbId);
        setEpisodeCounts(counts);
      } catch (e) {
        console.error("Failed to fetch episode counts:", e);
      } finally {
        setLoadingEpisodes(false);
      }
    }
  };

  const handleEpisodeSelect = (season, episode) => {
    if (onUpdateWatched) {
      onUpdateWatched(item.id, {
        watchedSeason: season,
        watchedEpisode: episode
      });
    }
    setShowWatchedModal(false);
    setSelectedSeason(null);
  };

  const handleInfoClick = async (e) => {
    e.stopPropagation();
    setShowSummaryModal(true);
    
    // Fetch full details, trailer, recommendations
    if (!details && !loadingSummary) {
      setLoadingSummary(true);
      setLoadingRecs(true);
      try {
        const [fetchedDetails, videoKey] = await Promise.all([
          getDetails(item.type, item.tmdbId),
          getVideos(item.type, item.tmdbId)
        ]);
        setDetails(fetchedDetails);
        setSummary(fetchedDetails.overview || "No summary available.");
        setTrailerKey(videoKey);

        // Extract upcoming info
        if (item.type === "tv") {
          const upcoming = extractUpcomingInfo(fetchedDetails);
          setUpcomingInfo(upcoming);

          // Synchronize with database if it differs, so global sorting works
          const newDate = upcoming ? upcoming.date : null;
          const newInfo = upcoming ? upcoming.info : null;
          if (newDate !== item.nextEpisodeDate && auth.currentUser) {
            updateWatch(auth.currentUser.uid, item.id, {
              nextEpisodeDate: newDate,
              nextEpisodeInfo: newInfo
            });
          }
        }

        // Fetch recommendations
        const recs = await getRecommendations(item.type, item.tmdbId);
        setRecommendations(recs);

        // Fetch collection for movies
        if (item.type === "movie" && fetchedDetails.belongs_to_collection) {
          const col = await getCollection(fetchedDetails.belongs_to_collection.id);
          setCollectionData(col);
        }
      } catch (error) {
        console.error("Failed to fetch details:", error);
        setSummary("Failed to load summary.");
      } finally {
        setLoadingSummary(false);
        setLoadingRecs(false);
      }
    }
  };

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  // Check if a recommendation is already in the user's watchlist
  const isInWatchlist = (tmdbId) => {
    return allItems.some(i => i.tmdbId === tmdbId);
  };

  const epCountForSeason = selectedSeason ? (episodeCounts[selectedSeason] || 0) : 0;

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
        className={`card glass-panel ${isGlowing ? "glow-new" : ""} ${isUpcoming ? "glow-upcoming" : ""} ${viewMode === "list" ? "card-list" : ""}`}
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

          {isUpcoming && !isGlowing && (
            <div className="card-badge corner bottom-left card-tag-upcoming">
              SOON
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="card-title">
            {item.title}
            {/* Show New Badge inline for List View */}
            {viewMode === "list" && isGlowing && (
              <span className="list-tag-new">New</span>
            )}
            {viewMode === "list" && isUpcoming && !isGlowing && (
              <span className="list-tag-new" style={{ background: "rgba(234, 179, 8, 0.2)", borderColor: "rgba(234, 179, 8, 0.4)", color: "#eab308" }}>Soon</span>
            )}
          </div>
          
          <div className="card-subline">
            {item.type?.toUpperCase()}
          </div>

          {/* Show Rating inline for List View */}
          {viewMode === "list" && item.rating && (
            <div className="card-list-meta-row">
              <span className="list-rating">⭐ {item.rating.toFixed(1)}</span>
              {item.watchedSeason && item.type === "tv" && (
                 <span>• S{item.watchedSeason}{item.watchedEpisode ? ` E${item.watchedEpisode}` : ""} Watched</span>
              )}
            </div>
          )}

          {/* Grid View Only Watched Info */}
          {viewMode !== "list" && item.watchedSeason && item.type === "tv" && (
            <div className="card-watched-info">
              Watched: S{item.watchedSeason}{item.watchedEpisode ? ` E${item.watchedEpisode}` : ""}
            </div>
          )}

          {/* Next airing date badge */}
          {viewMode !== "list" && item.nextEpisodeDate && (
            <div className="card-airing-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
              </svg>
              {new Date(item.nextEpisodeDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
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

        <button
          onClick={handleToggleBucket}
          className={`card-bucket-btn ${item.addedToBucketAt ? "in-bucket" : ""}`}
          aria-label="Bucket"
          title={item.addedToBucketAt ? "Remove from Watch Next Stack" : "Add to Watch Next Stack"}
        >
          <span style={{ filter: item.addedToBucketAt ? "drop-shadow(0 0 5px #e50914)" : "none" }}>🪣</span>
        </button>
      </div>

      {/* Watched Modal */}
      {showWatchedModal && item.type === "tv" && (
        <div className="modal-backdrop" onClick={() => { setShowWatchedModal(false); setSelectedSeason(null); }}>
          <div className="modal-panel glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Mark Watched - {item.title}</div>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => { setShowWatchedModal(false); setSelectedSeason(null); }}
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
                    className={`season-button ${(selectedSeason || item.watchedSeason) === season ? "season-button-active" : ""}`}
                    onClick={() => handleSeasonSelect(season)}
                  >
                    Season {season}
                  </button>
                ))}
              </div>
            </div>

            {/* Episode picker */}
            {selectedSeason && (
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: "#9ca3af" }}>
                  Episode in Season {selectedSeason}:
                </div>
                {loadingEpisodes ? (
                  <div style={{ padding: "1rem", textAlign: "center", color: "#9ca3af", fontSize: "0.85rem" }}>
                    Loading episodes...
                  </div>
                ) : epCountForSeason > 0 ? (
                  <div className="episode-picker-grid">
                    <button
                      type="button"
                      className="episode-all-btn"
                      onClick={() => handleEpisodeSelect(selectedSeason, epCountForSeason)}
                    >
                      ✓ All {epCountForSeason} episodes
                    </button>
                    {Array.from({ length: epCountForSeason }, (_, i) => i + 1).map(ep => (
                      <button
                        key={ep}
                        type="button"
                        className={`episode-btn ${item.watchedSeason === selectedSeason && item.watchedEpisode === ep ? "episode-btn-active" : ""}`}
                        onClick={() => handleEpisodeSelect(selectedSeason, ep)}
                      >
                        {ep}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: "0.5rem", textAlign: "center", color: "#9ca3af", fontSize: "0.85rem" }}>
                    Episode data unavailable
                  </div>
                )}
              </div>
            )}

            {calendarEnabled && (
              <div style={{ marginBottom: "1rem", paddingTop: "0.75rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ marginBottom: "0.75rem", fontSize: "0.9rem", opacity: 0.9 }}>
                  Set a reminder for next episode:
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input
                    type="date"
                    id={`calendar-date-${item.id}`}
                    defaultValue={item.nextEpisodeDate || (item.lastDate ? new Date(item.lastDate).toISOString().split('T')[0] : "")}
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

                    const eventTitle = `Watch: ${item.title} - Season ${item.watchedSeason || maxSeason}`;
                    const eventDescription = item.overview || `TV Series - Next episode reminder`;
                    const startDateTime = `${selectedDate}T${selectedTime}:00`;
                    const endDateTime = new Date(new Date(startDateTime).getTime() + 60 * 60 * 1000).toISOString().replace(/\.\d{3}Z$/, "");
                    
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
                onClick={() => { setShowWatchedModal(false); setSelectedSeason(null); }}
              >
                Done
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
                      {details?.first_air_date && !details?.release_date && (
                        <span className="summary-date">
                          {new Date(details.first_air_date).getFullYear()}
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

                {/* Next Season / Upcoming Info */}
                {item.type === "tv" && (
                  <div className="next-season-section">
                    <h3 className="next-season-title">
                      📅 Next Episode / Season
                    </h3>
                    {upcomingInfo ? (
                      <div className="next-season-info">
                        <div>
                          <span className="next-season-date">
                            {upcomingInfo.info}
                          </span>
                          {" — "}
                          {upcomingInfo.name && <span>"{upcomingInfo.name}" </span>}
                        </div>
                        <div style={{ marginTop: "0.3rem" }}>
                          Airs on{" "}
                          <span className="next-season-date">
                            {new Date(upcomingInfo.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                              year: "numeric"
                            })}
                          </span>
                        </div>
                      </div>
                    ) : details?.status === "Ended" || details?.status === "Canceled" ? (
                      <div className="next-season-info">
                        <span className="next-season-unknown">
                          Show status: {details.status}. No new episodes expected.
                        </span>
                      </div>
                    ) : (
                      <div className="next-season-info">
                        <span className="next-season-unknown">
                          No confirmed air date yet. The show is {details?.status?.toLowerCase() || "in production"}.
                        </span>
                      </div>
                    )}
                  </div>
                )}

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

                {/* Collection / Franchise (movies) */}
                {collectionData && collectionData.parts && collectionData.parts.length > 1 && (
                  <div className="collection-section">
                    <h3 className="collection-title">🎬 {collectionData.name}</h3>
                    <p className="collection-subtitle">Watch order in this franchise:</p>
                    <div className="collection-list">
                      {collectionData.parts.map((part, idx) => {
                        const inList = isInWatchlist(part.id);
                        return (
                          <div
                            key={part.id}
                            className={`collection-item ${inList ? "in-list" : ""}`}
                            onClick={() => {
                              if (!inList && onSelectTitle) {
                                onSelectTitle({ id: part.id, media_type: "movie", title: part.title, poster_path: part.poster_path });
                              }
                            }}
                            style={{ cursor: inList ? "default" : "pointer" }}
                          >
                            {part.poster_path ? (
                              <img
                                src={posterUrl(part.poster_path)}
                                alt={part.title}
                                className="collection-item-poster"
                              />
                            ) : (
                              <div className="collection-item-poster" style={{ background: "#222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#9ca3af" }}>
                                No poster
                              </div>
                            )}
                            {inList && <span className="collection-item-badge">✓ In list</span>}
                            <div className="collection-item-title">{part.title}</div>
                            {part.release_date && (
                              <div className="collection-item-year">{part.release_date.split("-")[0]}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Recommendations / What to Watch Next */}
                {recommendations && recommendations.length > 0 && (
                  <div className="recommendations-section">
                    <h3 className="recommendations-title">🍿 What to Watch Next</h3>
                    <p className="recommendations-subtitle">
                      {item.type === "tv" ? "Similar shows & spin-offs" : "If you liked this, try these"}
                    </p>
                    <div className="recommendations-grid">
                      {recommendations.slice(0, 8).map(rec => {
                        const inList = isInWatchlist(rec.id);
                        return (
                          <div
                            key={rec.id}
                            className="rec-card"
                            onClick={() => {
                              if (!inList && onSelectTitle) {
                                onSelectTitle({ id: rec.id, media_type: rec.media_type, title: rec.title, poster_path: rec.poster_path });
                              }
                            }}
                          >
                            {rec.poster_path ? (
                              <img
                                src={posterUrl(rec.poster_path)}
                                alt={rec.title}
                                className="rec-card-poster"
                              />
                            ) : (
                              <div className="rec-card-poster" style={{ background: "#222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#9ca3af" }}>
                                No poster
                              </div>
                            )}
                            {inList && <span className="rec-card-in-list">✓</span>}
                            {!inList && (
                              <button className="rec-card-add-btn" onClick={(e) => {
                                e.stopPropagation();
                                if (onSelectTitle) {
                                  onSelectTitle({ id: rec.id, media_type: rec.media_type, title: rec.title, poster_path: rec.poster_path });
                                }
                              }}>
                                + Add
                              </button>
                            )}
                            <div className="rec-card-body">
                              <div className="rec-card-title">{rec.title}</div>
                              <div className="rec-card-meta">
                                {rec.vote_average ? `⭐ ${rec.vote_average.toFixed(1)}` : ""}
                                {rec.release_date ? ` • ${rec.release_date.split("-")[0]}` : ""}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
