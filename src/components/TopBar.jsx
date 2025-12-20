import React, { useState, useRef, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { searchTMDB, posterUrl } from "../services/tmdb";

export default function TopBar({ user, onRefresh, refreshing, unwatchedCount = 0, unwatchedItems = [], viewMode = "grid", setViewMode, onOpenSettings, onSelectTitle }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);
  
  // Profile Dropdown state
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowProfileMenu(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="topbar">
      {/* 1. Logo Section */}
      <div className="topbar-logo-section">
        <div className="topbar-logo">
          <span className="topbar-logo-icon">🎬</span>
          <span className="topbar-logo-text">Watchlist</span>
        </div>
      </div>
      
      {/* 2. Search Section (Will be moved via CSS order on mobile) */}
      {user && (
        <div className="topbar-search-section" ref={searchRef}>
          <div className="search-input-wrapper">
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
          </div>
          
          {searchResults.length > 0 && (
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
        </div>
      )}

      {/* 3. Actions Section */}
      <div className="topbar-actions-section">
        {user && (
          <>
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
                      <button onClick={() => setShowNotifications(false)} className="notification-close">✕</button>
                    </div>
                    <div className="notification-list">
                      {unwatchedItems.map(item => (
                        <div key={item.id} className="notification-item">
                          <div className="notification-item-poster">
                            {item.poster && <img src={item.poster} alt={item.title} />}
                          </div>
                          <div className="notification-item-content">
                            <div className="notification-item-title">{item.title}</div>
                            <div className="notification-item-info">New episodes available</div>
                          </div>
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