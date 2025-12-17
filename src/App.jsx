import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import AddTitle from "./components/AddTitle";
import Grid from "./components/Grid";
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

  useEffect(() => {
    if (!user) return;
    return subscribeWatchlist(user.uid, setItems);
  }, [user]);

  if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>;

  if (!user) {
    return (
      <TopBar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        user={null}
      />
    );
  }

  const addFromTMDB = async result => {
    const details = await getDetails(result.media_type, result.id);

    let lastInfo = "Unknown";
    let lastDate = null;
    let status = "waiting";

    if (result.media_type === "tv") {
      const ep = details.last_episode_to_air;
      if (ep) {
        lastInfo = `S${ep.season_number} E${ep.episode_number}`;
        lastDate = ep.air_date;
      }
      status = details.status === "Ended" ? "ended" : "waiting";
    } else {
      lastInfo = details.release_date || "Unreleased";
      lastDate = details.release_date || null;
      status = details.release_date ? "released" : "unreleased";
    }

    await addWatch(user.uid, {
      title: result.title || result.name,
      tmdbId: result.id,
      type: result.media_type,
      poster: posterUrl(details.poster_path),
      lastInfo,
      lastDate,
      status,
      eagerness: 3,
      createdAt: Date.now()
    });
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
    <>
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
      <Grid
        items={sorted}
        onRate={updateEagerness}
        onDelete={deleteItem}
      />
    </>
  );
}
