import React, { useState, useRef, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { searchTMDB, posterUrl } from "../services/tmdb";

export default function TopBar({
  user,
  onRefresh,
  refreshing,
  unwatchedCount = 0,
  unwatchedItems = [],
  viewMode = "grid",
  setViewMode,
  onOpenSettings,
  onSelectTitle,
  route = "/",
  onNavigate,
  onDismissNotification,
  onClearAllNotifications,
  watchlistSearchQuery = "",
  setWatchlistSearchQuery,
  watchlistSearchResults = [],
  allItems = [],
  onToggleBucket
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  
  // Profile Dropdown state
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  // Search mode: "tmdb" or "mylist"
  const [searchMode, setSearchMode] = useState("tmdb");

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
        if (setWatchlistSearchQuery) setWatchlistSearchQuery("");
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // TMDB search
  useEffect(() => {
    if (searchMode !== "tmdb" || !searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const timeout = setTimeout(async () => {
      const results = await searchTMDB(searchQuery);
      setSearchResults(results.slice(0, 6));
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchQuery, searchMode]);

  // Watchlist search
  useEffect(() => {
    if (searchMode !== "mylist") return;
    if (setWatchlistSearchQuery) {
      setWatchlistSearchQuery(searchQuery);
    }
  }, [searchQuery, searchMode]);

  const handleSelectTitle = (result) => {
    onSelectTitle(result);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfileMenu(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const currentSearchValue = searchQuery;

  return (
    <div className="topbar">
      {/* 1. Logo Section */}
      <div className="topbar-logo-section">
        <div className="topbar-logo" style={{ cursor: "pointer" }} onClick={() => onNavigate && onNavigate("/")}>
          <span className="topbar-logo-icon">🎬</span>
          <span className="topbar-logo-text">Watchlist</span>
        </div>
      </div>
      
      {/* 2. Search Section */}
      {user && (
        <div className="topbar-search-section" ref={searchRef}>
          <div className="unified-search-bar">
            <div className="search-mode-switcher">
              <button
                className={`search-mode-tab ${searchMode === "tmdb" ? "active" : ""}`}
                onClick={() => {
                  setSearchMode("tmdb");
                  setSearchQuery("");
                  setSearchResults([]);
                  if (setWatchlistSearchQuery) setWatchlistSearchQuery("");
                }}
              >
                TMDB
              </button>
              <button
                className={`search-mode-tab ${searchMode === "mylist" ? "active" : ""}`}
                onClick={() => {
                  setSearchMode("mylist");
                  setSearchQuery("");
                  setSearchResults([]);
                }}
              >
                My List
              </button>
            </div>
            <div className="unified-search-input-wrap">
              <svg className="unified-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                value={currentSearchValue}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchMode === "tmdb" ? "Search TMDB..." : "Search your watchlist..."}
                className="unified-search-input"
              />
            </div>
          </div>
          
          {/* TMDB results dropdown */}
          {searchMode === "tmdb" && searchResults.length > 0 && (
            <div className="topbar-search-dropdown">
              {searchResults.map(result => (
                <div key={result.id} onClick={() => handleSelectTitle(result)} className="topbar-search-result">
                  <img src={posterUrl(result.poster_path)} alt="" className="topbar-search-poster" />
                  <div className="topbar-search-info">
                    <div className="topbar-search-title">{result.title || result.name}</div>
                    <div className="topbar-search-meta">
                      {result.media_type?.toUpperCase()} {result.release_date || result.first_air_date ? `• ${(result.release_date || result.first_air_date).split('-')[0]}` : ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Watchlist search results dropdown */}
          {searchMode === "mylist" && searchQuery.trim() && watchlistSearchResults.length > 0 && (
            <div className="watchlist-search-dropdown">
              {watchlistSearchResults.map(item => (
                <div key={item.id} className="watchlist-search-result" onClick={() => {
                  setSearchQuery("");
                  if (setWatchlistSearchQuery) setWatchlistSearchQuery("");
                  // Could scroll to the item or open its modal
                }}>
                  {item.poster && <img src={item.poster} alt="" className="topbar-search-poster" />}
                  <div className="topbar-search-info">
                    <div className="topbar-search-title">{item.title}</div>
                    <div className="topbar-search-meta">
                      {item.type?.toUpperCase()}
                      {item.watchedSeason && ` • Watched S${item.watchedSeason}${item.watchedEpisode ? ` E${item.watchedEpisode}` : ""}`}
                      {item.eagerness && ` • ${"🔥".repeat(item.eagerness)}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchMode === "mylist" && searchQuery.trim() && watchlistSearchResults.length === 0 && (
            <div className="watchlist-search-dropdown">
              <div style={{ padding: "1.5rem", textAlign: "center", color: "#9ca3af", fontSize: "0.85rem" }}>
                No matches in your watchlist
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. Actions Section */}
      <div className="topbar-actions-section">
        {user && (
          <>
            {onToggleBucket && (
              <button 
                className="topbar-action-btn bucket-btn" 
                onClick={onToggleBucket}
                title="Watch Next Stack"
              >
                🪣
              </button>
            )}

            {/* New Episodes Nav Button */}
            {onNavigate && (
              <button
                onClick={() => onNavigate(route === "/new-episodes" ? "/" : "/new-episodes")}
                className={`topbar-nav-btn ${route === "/new-episodes" ? "active" : ""}`}
              >
                📺
                <span className="topbar-nav-btn-text">New</span>
                {unwatchedCount > 0 && (
                  <span className="topbar-nav-badge">{unwatchedCount}</span>
                )}
              </button>
            )}

            {/* Notification Button */}
            {unwatchedCount > 0 && (
              <div className="notification-container" ref={notificationRef}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="topbar-icon-btn"
                  aria-label="Notifications"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  <span className="notification-badge">{unwatchedCount}</span>
                </button>
                {showNotifications && (
                  <div className="notification-dropdown">
                    <div className="notification-dropdown-header">
                      <span>New Episodes</span>
                      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        {onClearAllNotifications && (
                          <button
                            className="notification-clear-all"
                            onClick={() => {
                              onClearAllNotifications();
                              setShowNotifications(false);
                            }}
                          >
                            Clear All
                          </button>
                        )}
                        <button onClick={() => setShowNotifications(false)} className="notification-close">✕</button>
                      </div>
                    </div>
                    <div className="notification-list">
                      {unwatchedItems.map(item => (
                        <div key={item.id} className="notification-item-wrapper">
                          <div className="notification-item">
                            <div className="notification-item-poster">
                              {item.poster && <img src={item.poster} alt={item.title} />}
                            </div>
                            <div className="notification-item-content">
                              <div className="notification-item-title">{item.title}</div>
                              <div className="notification-item-info">
                                {item.lastInfo ? `New: ${item.lastInfo}` : "New episodes available"}
                                {item.watchedSeason && ` (watched S${item.watchedSeason})`}
                              </div>
                            </div>
                          </div>
                          {onDismissNotification && (
                            <button
                              className="notification-dismiss-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                onDismissNotification(item.id, item.lastInfo);
                              }}
                              title="Dismiss"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Refresh Button */}
            <button onClick={onRefresh} disabled={refreshing} className="topbar-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={refreshing ? "rotating" : ""}>
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </button>

            {/* View Toggle */}
            <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="topbar-icon-btn">
              {viewMode === "grid" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              )}
            </button>

            {/* Profile Dropdown with Logout */}
            <div className="topbar-divider"></div>
            <div style={{ position: "relative" }} ref={profileRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="topbar-profile-btn"
                aria-label="Profile"
              >
                <div className="topbar-profile-avatar">
                  {user?.photoURL ? <img src={user.photoURL} alt="Profile" /> : <span>{user?.email?.[0]?.toUpperCase()}</span>}
                </div>
              </button>

              {showProfileMenu && (
                <div className="profile-dropdown">
                   <div className="profile-header-mobile">
                      {user?.displayName || user?.email}
                   </div>
                  <button 
                    className="profile-menu-item"
                    onClick={() => {
                      onOpenSettings();
                      setShowProfileMenu(false);
                    }}
                  >
                    ⚙️ Settings
                  </button>
                  <div className="profile-divider"></div>
                  <button 
                    className="profile-menu-item danger"
                    onClick={handleLogout}
                  >
                    🚪 Sign Out
                  </button>
                </div>
              )}
            </div>
          </>
        )}
        {!user && (
          <button onClick={() => signInWithPopup(auth, provider)} className="btn btn-primary topbar-signin-btn">
             Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}