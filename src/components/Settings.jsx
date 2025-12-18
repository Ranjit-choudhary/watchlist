import React, { useState, useEffect } from "react";
import { getUserSettings, updateUserSettings } from "../services/userSettings";

export default function Settings({ user, onClose }) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: false,
    emailFrequency: "daily",
    email: user?.email || ""
  });

  useEffect(() => {
    const loadSettings = async () => {
      if (!user) return;
      try {
        const userSettings = await getUserSettings(user.uid);
        setSettings({
          emailNotifications: userSettings.emailNotifications || false,
          emailFrequency: userSettings.emailFrequency || "daily",
          email: userSettings.email || user.email || ""
        });
      } catch (error) {
        console.error("Failed to load settings:", error);
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await updateUserSettings(user.uid, settings);
      alert("Settings saved successfully!");
      onClose();
    } catch (error) {
      console.error("Failed to save settings:", error);
      alert("Failed to save settings. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-panel glass-panel settings-modal" onClick={e => e.stopPropagation()}>
          <div className="summary-loading">
            <div className="summary-loading-spinner"></div>
            <p>Loading settings...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel glass-panel settings-modal" onClick={e => e.stopPropagation()}>
        <div className="settings-header">
          <h2 className="settings-title">Settings</h2>
          <button
            className="summary-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3 className="settings-section-title">Email Notifications</h3>
            <p className="settings-section-description">
              Get notified when new episodes are available for shows in your watchlist.
            </p>

            <div className="settings-option">
              <label className="settings-checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => setSettings({
                    ...settings,
                    emailNotifications: e.target.checked
                  })}
                  className="settings-checkbox"
                />
                <span>Enable email notifications</span>
              </label>
            </div>

            {settings.emailNotifications && (
              <>
                <div className="settings-option">
                  <label className="settings-label">Email Address</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({
                      ...settings,
                      email: e.target.value
                    })}
                    placeholder="your@email.com"
                    className="settings-input"
                  />
                  <small className="settings-hint">
                    We'll send notifications to this email address
                  </small>
                </div>

                <div className="settings-option">
                  <label className="settings-label">Notification Frequency</label>
                  <select
                    value={settings.emailFrequency}
                    onChange={(e) => setSettings({
                      ...settings,
                      emailFrequency: e.target.value
                    })}
                    className="settings-select"
                  >
                    <option value="immediate">Immediate (as soon as new episodes arrive)</option>
                    <option value="daily">Daily Digest (once per day)</option>
                    <option value="weekly">Weekly Digest (once per week)</option>
                  </select>
                  <small className="settings-hint">
                    Choose how often you want to receive notifications
                  </small>
                </div>
              </>
            )}
          </div>

          <div className="settings-section">
            <h3 className="settings-section-title">About</h3>
            <p className="settings-section-description">
              Email notifications are powered by Firebase Cloud Functions and SendGrid.
              Notifications are sent automatically when new episodes are detected for shows
              you're tracking.
            </p>
          </div>
        </div>

        <div className="settings-footer">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
            disabled={saving || (settings.emailNotifications && !settings.email)}
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </div>
    </div>
  );
}


