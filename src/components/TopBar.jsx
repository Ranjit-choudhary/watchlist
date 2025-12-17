import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function TopBar({
  filter,
  setFilter,
  sort,
  setSort,
  user,
  onRefresh,
  refreshing
}) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
      borderBottom: "1px solid #30363d"
    }}>
      <div style={{ fontSize: "1.2rem" }}>🔥 Watch Dashboard</div>

      <div style={{ display: "flex", gap: "0.6rem" }}>
        {user && (
          <button
            onClick={onRefresh}
            disabled={refreshing}
            style={{
              background: "#1f6feb",
              border: "none",
              padding: "0.4rem 0.8rem",
              color: "#fff"
            }}
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        )}

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          style={{
            background: "#161b22",
            color: "#fff",
            border: "1px solid #30363d"
          }}
        >
          <option value="pain">🔥 Pain</option>
          <option value="eagerness">🔥 Eagerness</option>
          <option value="recent">🆕 Recent</option>
        </select>

        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{
            background: "#161b22",
            color: "#fff",
            border: "1px solid #30363d"
          }}
        >
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="waiting">Waiting</option>
          <option value="ended">Ended</option>
        </select>

        {!user ? (
          <button
            onClick={() => signInWithPopup(auth, provider)}
            style={{ background: "#238636", border: "none", color: "#fff" }}
          >
            Sign in
          </button>
        ) : (
          <button
            onClick={() => signOut(auth)}
            style={{ background: "#da3633", border: "none", color: "#fff" }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
