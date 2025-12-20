import React, { useState, useRef, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { searchTMDB, posterUrl } from "../services/tmdb";

export default function TopBar({ user, onRefresh, refreshing, unwatchedCount = 0, unwatchedItems = [], viewMode = "grid", setViewMode, onOpenSettings, onSelectTitle }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      const results = await searchTMDB(searchQuery);
      setSearchResults(results.slice(0, 6));
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const handleSelectTitle = (result) => {
    onSelectTitle(result);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-logo">
          <span className="topbar-logo-icon">🎬</span>
          <span className="topbar-logo-text">Watchlist</span>
        </div>
        
        {/* Search Box */}
        {user && (
          <div className="topbar-search" ref={searchRef}>
            <svg className="topbar-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies & series..."
              className="topbar-search-input"
            />
            
            {searchResults.length > 0 && (
              <div className="topbar-search-dropdown">
                {searchResults.map(result => (
                  <div
                    key={result.id}
                    onClick={() => handleSelectTitle(result)}
                    className="topbar-search-result"
                  >
                    <img
                      src={posterUrl(result.poster_path)}
                      alt=""
                      className="topbar-search-poster"
                    />
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
          </div>
        )}
      </div>

      <div className="topbar-actions">
        {user && (
          <>
            {/* Notification Button */}
            {unwatchedCount > 0 && (
              <div className="notification-container" ref={notificationRef}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="topbar-icon-btn"
                  aria-label="Notifications"
                  title="New episodes"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  {unwatchedCount > 0 && (
                    <span className="notification-badge">{unwatchedCount}</span>
                  )}
                </button>

                {showNotifications && (
                  <div className="notification-dropdown">
                    <div className="notification-dropdown-header">
                      <span>New Episodes Available</span>
                      <button
                        onClick={() => setShowNotifications(false)}
                        className="notification-close"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="notification-list">
                      {unwatchedItems.map(item => {
                        const match = item.lastInfo?.match(/S(\d+)\s+E(\d+)/);
                        const lastSeason = match ? parseInt(match[1]) : null;
                        return (
                          <div key={item.id} className="notification-item">
                            <div className="notification-item-poster">
                              {item.poster ? (
                                <img src={item.poster} alt={item.title} />
                              ) : (
                                <div className="notification-item-placeholder" />
                              )}
                            </div>
                            <div className="notification-item-content">
                              <div className="notification-item-title">{item.title}</div>
                              <div className="notification-item-info">
                                {lastSeason && (
                                  <span>New Season {lastSeason} available</span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Refresh Button */}
            <button
              onClick={onRefresh}
              disabled={refreshing}
              className="topbar-icon-btn"
              aria-label="Refresh watchlist"
              title="Refresh watchlist"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className={refreshing ? "rotating" : ""}
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </button>

            {/* View Toggle Button */}
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="topbar-icon-btn"
              aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
              title={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
            >
              {viewMode === "grid" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              )}
            </button>

            {/* Settings Button */}
            <button
              onClick={onOpenSettings}
              className="topbar-icon-btn"
              aria-label="Settings"
              title="Settings"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m8.66-15.66l-4.24 4.24M9.88 14.12l-4.24 4.24M23 12h-6m-6 0H1m20.66 8.66l-4.24-4.24M9.88 9.88l-4.24-4.24"></path>
              </svg>
            </button>

            {/* Profile Icon */}
            <div className="topbar-divider"></div>
            <button
              onClick={onOpenSettings}
              className="topbar-profile-btn"
              aria-label="Profile"
              title={user?.displayName || user?.email || "Profile"}
            >
              <div className="topbar-profile-avatar">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" />
                ) : (
                  <span>{user?.email?.[0]?.toUpperCase() || "U"}</span>
                )}
              </div>
              <span className="topbar-profile-name">
                {user?.displayName || user?.email?.split('@')[0] || "User"}
              </span>
            </button>
          </>
        )}

        {!user && (
          <button
            onClick={() => signInWithPopup(auth, provider)}
            className="btn btn-primary topbar-signin-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
