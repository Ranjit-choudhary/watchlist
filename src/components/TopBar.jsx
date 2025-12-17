import React, { useState, useRef, useEffect } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

const shorten = str => {
  if (!str) return "";
  return str.length > 16 ? `${str.slice(0, 14)}…` : str;
};

export default function TopBar({ user, onRefresh, refreshing, unwatchedCount = 0, unwatchedItems = [], viewMode = "grid", setViewMode, onOpenSettings }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showNotifications]);

  return (
    <div className="topbar">
      <div className="topbar-title">
        🔥 Watchlist
      </div>

      <div className="topbar-actions">
        {user && (
          <>
            {/* Notification Button */}
            {unwatchedCount > 0 && (
              <div className="notification-container" ref={notificationRef}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="notification-button"
                  aria-label="Notifications"
                >
                  🔔
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

            {/* View Toggle Button */}
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="view-toggle-btn"
              aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
              title={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
            >
              {viewMode === "grid" ? "☰" : "⊞"}
            </button>

            {/* Profile Icon */}
            <button
              onClick={onOpenSettings}
              className="profile-icon-btn"
              aria-label="Settings"
              title="Settings"
            >
              <div className="profile-icon">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" />
                ) : (
                  <span>{user?.email?.[0]?.toUpperCase() || "U"}</span>
                )}
              </div>
            </button>
            <button
              onClick={onRefresh}
              disabled={refreshing}
              className="btn btn-primary"
            >
              {refreshing ? "Refreshing…" : "Refresh"}
            </button>
          </>
        )}

        {!user ? (
          <button
            onClick={() => signInWithPopup(auth, provider)}
            className="btn btn-primary"
          >
            Sign in
          </button>
        ) : (
          <button
            onClick={() => signOut(auth)}
            className="btn btn-outline"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
