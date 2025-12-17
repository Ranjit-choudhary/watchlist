import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function TopBar({ user, onRefresh, refreshing }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      borderBottom: "1px solid #30363d"
    }}>
      <div style={{ fontSize: "1.2rem" }}>
        🔥 Watchlist
      </div>

      <div style={{ display: "flex", gap: "0.6rem" }}>
        {user && (
          <button
            onClick={onRefresh}
            disabled={refreshing}
            style={{
              background: "#1f6feb",
              border: "none",
              padding: "0.4rem 0.8rem",
              color: "#fff",
              borderRadius: "6px"
            }}
          >
            {refreshing ? "Refreshing…" : "Refresh"}
          </button>
        )}

        {!user ? (
          <button
            onClick={() => signInWithPopup(auth, provider)}
            style={{
              background: "#238636",
              border: "none",
              padding: "0.4rem 0.8rem",
              color: "#fff",
              borderRadius: "6px"
            }}
          >
            Sign in
          </button>
        ) : (
          <button
            onClick={() => signOut(auth)}
            style={{
              background: "#da3633",
              border: "none",
              padding: "0.4rem 0.8rem",
              color: "#fff",
              borderRadius: "6px"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
