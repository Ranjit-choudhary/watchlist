import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import AddTitle from "./components/AddTitle";
import Grid from "./components/Grid";
import TierList from "./components/TierList";

import useAuth from "./hooks/useAuth";

import {
  subscribeWatchlist,
  addWatch,
  updateWatch,
  removeWatch
} from "./services/watchlist";

import { getDetails, posterUrl } from "./services/tmdb";

export default function App() {
  const { user, loading } = useAuth();
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("pain");
  const [refreshing, setRefreshing] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);
  const [showTierModal, setShowTierModal] = useState(false);

  useEffect(() => {
    if (!user) return;
    return subscribeWatchlist(user.uid, setItems);
  }, [user]);

  if (loading)
    return (
      <div className="app-root">
        <div>Loading...</div>
      </div>
    );

  if (!user) {
    return (
      <div className="app-root section-stack">
        <TopBar user={user} onRefresh={() => {}} refreshing={false} />
      </div>
    );
  }

  const addFromTMDB = async result => {
    try {
      console.log("TMDB result:", result);
  
      const details = await getDetails(result.media_type, result.id);
      console.log("TMDB details:", details);

      const draft = {
        title: result.title || result.name,
        tmdbId: result.id,
        type: result.media_type,
        poster: posterUrl(details.poster_path),
        lastInfo: null,
        lastDate: null,
        status: "waiting",
        eagerness: 3,
        rating: details.vote_average || null,
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
    setRefreshing(true);

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

    setRefreshing(false);
  };

  const updateEagerness = (id, value) =>
    updateWatch(user.uid, id, { eagerness: value });

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
    }
  };

  const skipTierSelection = async () => {
    if (!pendingItem) return;
    try {
      await addWatch(user.uid, pendingItem);
    } finally {
      setShowTierModal(false);
      setPendingItem(null);
    }
  };

  const deleteItem = id => removeWatch(user.uid, id);

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
      />
      <AddTitle onSelect={addFromTMDB} />
      <TierList items={sorted} onRate={updateEagerness} onDelete={deleteItem} />

      {showTierModal && pendingItem && (
        <div className="modal-backdrop">
          <div className="modal-panel glass-panel">
            <div className="modal-header">
              <div className="modal-title">Choose a tier</div>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  setShowTierModal(false);
                  setPendingItem(null);
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
              {pendingItem.poster && (
                <div
                  style={{
                    width: "80px",
                    height: "110px",
                    borderRadius: "10px",
                    backgroundImage: `url(${pendingItem.poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
              )}
              <div>
                <div style={{ fontWeight: 600, marginBottom: "0.15rem" }}>
                  {pendingItem.title}
                </div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.2rem" }}>
                  {pendingItem.type?.toUpperCase()}
                </div>
                {pendingItem.rating && (
                  <span className="card-rating-pill">
                    IMDb {pendingItem.rating.toFixed(1)}
                  </span>
                )}
              </div>
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
    </div>
  );
}
