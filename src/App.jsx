import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import TierList from "./components/TierList";
import Settings from "./components/Settings";
import LandingPage from "./components/LandingPage";

import useAuth from "./hooks/useAuth";

import {
  subscribeWatchlist,
  addWatch,
  updateWatch,
  removeWatch
} from "./services/watchlist";

import { getDetails, getVideos, posterUrl } from "./services/tmdb";
import { getUserSettings } from "./services/userSettings";

export default function App() {
  const { user, loading } = useAuth();
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("pain");
  const [refreshing, setRefreshing] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);
  const [showTierModal, setShowTierModal] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [showSettings, setShowSettings] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [userSettings, setUserSettings] = useState(null);

  useEffect(() => {
    if (!user) return;
    return subscribeWatchlist(user.uid, setItems);
  }, [user]);

  useEffect(() => {
    const loadSettings = async () => {
      if (!user) return;
      try {
        const settings = await getUserSettings(user.uid);
        setUserSettings(settings);
      } catch (error) {
        console.error("Failed to load user settings:", error);
      }
    };
    loadSettings();
  }, [user]);

  // Auto-refresh daily
  useEffect(() => {
    if (!user || !items.length) return;

    const checkAndRefresh = async () => {
      const lastRefreshKey = `lastRefresh_${user.uid}`;
      const lastRefresh = localStorage.getItem(lastRefreshKey);
      const now = Date.now();
      
      // Check if 24 hours have passed (86400000 milliseconds)
      if (!lastRefresh || now - parseInt(lastRefresh) > 86400000) {
        console.log("🔄 Auto-refreshing watchlist (daily check)...");
        await refreshAll();
        localStorage.setItem(lastRefreshKey, now.toString());
      }
    };

    checkAndRefresh();

    // Set up interval to check every hour if refresh is needed
    const interval = setInterval(checkAndRefresh, 3600000); // Check every hour

    return () => clearInterval(interval);
  }, [user, items.length]);

  if (loading)
    return (
      <div className="app-root">
        <div>Loading...</div>
      </div>
    );

  if (!user) {
    return (
      <div className="app-root">
        <LandingPage />
      </div>
    );
  }

  const addFromTMDB = async result => {
    try {
      console.log("TMDB result:", result);
  
      // Check for duplicates
      const existingItem = items.find(item => item.tmdbId === result.id && item.type === result.media_type);
      if (existingItem) {
        alert(`"${result.title || result.name}" is already in your watchlist!`);
        return;
      }

      const [details, trailerKey] = await Promise.all([
        getDetails(result.media_type, result.id),
        getVideos(result.media_type, result.id)
      ]);
      console.log("TMDB details:", details);

      // Extract last episode info for TV shows
      let lastInfo = null;
      let lastDate = null;
      let status = "waiting";
      let totalSeasons = null;
      let totalEpisodes = null;

      if (result.media_type === "tv") {
        const ep = details.last_episode_to_air;
        if (ep) {
          lastInfo = `S${ep.season_number} E${ep.episode_number}`;
          lastDate = ep.air_date;
          status = "waiting";
        }
        totalSeasons = details.number_of_seasons || null;
        totalEpisodes = details.number_of_episodes || null;
      } else if (details.release_date) {
        lastInfo = details.release_date;
        lastDate = details.release_date;
        status = "waiting";
      }

      const draft = {
        title: result.title || result.name,
        tmdbId: result.id,
        type: result.media_type,
        poster: posterUrl(details.poster_path),
        lastInfo,
        lastDate,
        status,
        eagerness: 3,
        rating: details.vote_average || null,
        overview: details.overview || null,
        trailerKey: trailerKey || null,
        totalSeasons,
        totalEpisodes,
        watchedSeason: null,
        watchedEpisode: null,
        createdAt: Date.now()
      };

      setPendingItem(draft);
      setShowTierModal(true);

      console.log("✅ Prepared draft item for tier selection");
    } catch (e) {
      console.error("❌ Failed to add:", e);
      alert("Failed to add item. Check console.");
    }
  };
  

  const refreshAll = async () => {
    if (!user) return;
    
    setRefreshing(true);

    try {
      for (const item of items) {
        const details = await getDetails(item.type, item.tmdbId);

        if (item.type === "tv") {
          const ep = details.last_episode_to_air;
          if (ep) {
            const info = `S${ep.season_number} E${ep.episode_number}`;
            if (info !== item.lastInfo) {
              await updateWatch(user.uid, item.id, {
                lastInfo: info,
                lastDate: ep.air_date,
                status: "new",
                updatedAt: Date.now()
              });
            }
          }
        } else if (
          details.release_date &&
          details.release_date !== item.lastDate
        ) {
          await updateWatch(user.uid, item.id, {
            lastInfo: details.release_date,
            lastDate: details.release_date,
            status: "new",
            updatedAt: Date.now()
          });
        }
      }

      // Update last refresh timestamp
      const lastRefreshKey = `lastRefresh_${user.uid}`;
      localStorage.setItem(lastRefreshKey, Date.now().toString());
    } catch (error) {
      console.error("Error during refresh:", error);
    }

    setRefreshing(false);
  };

  const updateEagerness = (id, value) =>
    updateWatch(user.uid, id, { eagerness: value });

  const updateWatched = (id, watched) =>
    updateWatch(user.uid, id, { ...watched, updatedAt: Date.now() });

  const confirmTierSelection = async eagerness => {
    if (!pendingItem) return;
    try {
      await addWatch(user.uid, {
        ...pendingItem,
        eagerness
      });
    } finally {
      setShowTierModal(false);
      setPendingItem(null);
      setShowTrailer(false);
    }
  };

  const skipTierSelection = async () => {
    if (!pendingItem) return;
    try {
      await addWatch(user.uid, pendingItem);
    } finally {
      setShowTierModal(false);
      setPendingItem(null);
      setShowTrailer(false);
    }
  };

  const deleteItem = id => removeWatch(user.uid, id);

  // Get items with new unwatched episodes
  const getUnwatchedItems = () => {
    return items.filter(item => {
      if (item.type !== "tv" || !item.lastInfo || !item.watchedSeason) return false;
      // Parse lastInfo format: "S2 E5"
      const match = item.lastInfo.match(/S(\d+)\s+E(\d+)/);
      if (!match) return false;
      const [, lastSeason] = match.map(Number);
      // Show notification if latest season is beyond what user has watched
      return lastSeason > item.watchedSeason;
    });
  };

  const unwatchedItems = getUnwatchedItems();
  const unwatchedCount = unwatchedItems.length;

  const visible = items.filter(i =>
    filter === "all" ? true : i.status === filter
  );

  const painIndex = item =>
    item.lastDate
      ? Math.floor(
          ((Date.now() - new Date(item.lastDate)) /
            (1000 * 60 * 60 * 24)) *
            item.eagerness
        )
      : 0;

  const sorted = [...visible].sort((a, b) => {
    if (sort === "pain") return painIndex(b) - painIndex(a);
    if (sort === "eagerness") return b.eagerness - a.eagerness;
    return (b.updatedAt || 0) - (a.updatedAt || 0);
  });

  return (
    <div className="app-root section-stack">
      <TopBar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        user={user}
        onRefresh={refreshAll}
        refreshing={refreshing}
        unwatchedCount={unwatchedCount}
        unwatchedItems={unwatchedItems}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenSettings={() => setShowSettings(true)}
        onSelectTitle={addFromTMDB}
      />
      <TierList 
        items={sorted} 
        onRate={updateEagerness} 
        onDelete={deleteItem}
        onUpdateWatched={updateWatched}
        viewMode={viewMode}
        calendarEnabled={userSettings?.calendarIntegration || false}
      />

      {showTierModal && pendingItem && (
        <div className="modal-backdrop">
          <div className="modal-panel glass-panel">
            <div className="modal-header">
              <div className="modal-title">Add to watchlist</div>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  setShowTierModal(false);
                  setPendingItem(null);
                  setShowTrailer(false);
                }}
              >
                ✕
              </button>
            </div>

            {/* Poster + basic meta */}
            <div style={{ display: "flex", gap: "0.9rem", marginBottom: "0.75rem" }}>
              {pendingItem.poster && (
                <div
                  style={{
                    width: "90px",
                    height: "130px",
                    borderRadius: "10px",
                    backgroundImage: `url(${pendingItem.poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    flexShrink: 0
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, marginBottom: "0.15rem", fontSize: "1rem" }}>
                  {pendingItem.title}
                </div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.3rem" }}>
                  {pendingItem.type?.toUpperCase()}
                </div>
                {pendingItem.rating && (
                  <span className="card-rating-pill">
                    ⭐ {pendingItem.rating.toFixed(1)}
                  </span>
                )}
                {(pendingItem.totalSeasons || pendingItem.totalEpisodes) && (
                  <div
                    style={{
                      marginTop: "0.35rem",
                      fontSize: "0.8rem",
                      color: "#9ca3af",
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap"
                    }}
                  >
                    {pendingItem.totalSeasons && (
                      <span>{pendingItem.totalSeasons} season{pendingItem.totalSeasons !== 1 ? "s" : ""}</span>
                    )}
                    {pendingItem.totalEpisodes && (
                      <span>• {pendingItem.totalEpisodes} episodes</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            {pendingItem.overview && (
              <div style={{ marginBottom: "0.75rem" }}>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    marginBottom: "0.25rem"
                  }}
                >
                  Summary
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    color: "#9ca3af"
                  }}
                >
                  {pendingItem.overview}
                </p>
              </div>
            )}

            {/* Trailer button and embedded player */}
            {pendingItem.trailerKey && (
              <div style={{ marginBottom: "0.9rem" }}>
                <button
                  type="button"
                  className="btn btn-youtube"
                  onClick={() => setShowTrailer(!showTrailer)}
                >
                  <span className="youtube-icon">▶</span>
                  {showTrailer ? "Hide Trailer" : "Watch Trailer"}
                </button>
                {showTrailer && (
                  <div className="youtube-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${pendingItem.trailerKey}`}
                      title="Trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}

            {/* Watched season (optional) - only for TV series */}
            {pendingItem.type === "tv" && pendingItem.totalSeasons && (
              <div style={{ marginBottom: "0.9rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.85rem",
                    opacity: 0.9
                  }}
                >
                  Watched up to season (optional)
                </label>
                <div className="season-buttons-grid">
                  {Array.from({ length: pendingItem.totalSeasons }, (_, i) => i + 1).map(season => (
                    <button
                      key={season}
                      type="button"
                      className={`season-button ${pendingItem.watchedSeason === season ? "season-button-active" : ""}`}
                      onClick={() => {
                        setPendingItem(prev => ({
                          ...prev,
                          watchedSeason: season,
                          watchedEpisode: 0
                        }));
                      }}
                    >
                      Season {season}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tier selection */}
            <div style={{ marginTop: "0.5rem" }}>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "0.35rem"
                }}
              >
                Choose a tier
              </div>
              <div className="modal-tier-grid">
                {[
                  { value: 5, label: "🔥🔥🔥🔥🔥 Can’t Wait" },
                  { value: 4, label: "🔥🔥🔥🔥 Very Eager" },
                  { value: 3, label: "🔥🔥🔥 Interested" },
                  { value: 2, label: "🔥🔥 Casual" },
                  { value: 1, label: "🔥 Low Priority" }
                ].map(tier => (
                  <button
                    key={tier.value}
                    type="button"
                    className="modal-tier-button"
                    onClick={() => confirmTierSelection(tier.value)}
                  >
                    <div style={{ fontSize: "0.85rem", marginBottom: "0.1rem" }}>
                      {tier.label}
                    </div>
                    <div style={{ fontSize: "0.7rem", opacity: 0.75 }}>
                      Place into this tier
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={skipTierSelection}
              >
                Skip (use default)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <Settings
          user={user}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}
