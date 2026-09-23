# Roadmap

Living list of what's next for the watchlist app, split by how soon it's
worth picking up. "Now" items are small enough to tackle in normal-sized
changes; "Later" items are deliberately deferred because they need design
decisions or are too large to do safely in one pass.

## Now

- ~~Auto-deploy~~ — done. Every push to `main` builds, tests and publishes
  to Firebase Hosting (`.github/workflows/firebase-hosting-merge.yml`),
  using the `VITE_TMDB_API_KEY` and Firebase service-account repo secrets.

- **Email notifications — code is deploy-ready, deploy is pending on
  credentials.** `functions/index.js` now reads `sendgrid.key`,
  `sendgrid.sender`, and `tmdb.key` from Firebase config instead of
  hardcoded placeholders, skips the run with a loud error if any are
  missing, and `firebase.json` has a `functions` block so
  `firebase deploy` actually picks it up. What's left, once a SendGrid
  account exists:
  1. `firebase functions:config:set sendgrid.key="..." sendgrid.sender="..." tmdb.key="..."`
     (see `functions/README.md`).
  2. `firebase deploy --only functions`.
  Until step 2 happens, the Settings toggle still saves a preference
  that nothing acts on yet.

- ~~Automated tests~~ — done. Added Vitest (`npm test`), plus
  `src/lib/episodeTracking.js` and `src/lib/painIndex.js`: the
  `S<season> E<episode>`-parsing "is this unwatched?" check and the
  pain-index sort were previously duplicated across `App.jsx` (twice)
  and `WatchCard.jsx`; they're now single, tested functions used by all
  three call sites.

- ~~Clean up debug logging~~ — done. Removed the leftover
  development-only `console.log` calls in `App.jsx` (TMDB result/detail
  dumps, migration progress, auto-refresh ticks). Error-path
  `console.error` calls were left in place — those are real diagnostics.

## Next

- **CSV/JSON export-import** — backup/restore the watchlist outside
  Firestore.
- **Shareable read-only watchlist link** — `?share=<uid>` view for
  friends; needs a scoped Firestore rule change (opt-in public-read flag
  per user) on top of the current `firestore.rules`, which currently
  denies all access outside the owning user.
- **Bulk actions** — multi-select cards to bulk-delete / re-tier / mark
  finished.
- **Vault follow-ups** — a finished series that gets a new season currently
  stays in The Vault silently (finished titles aren't auto-checked); consider
  un-finishing it or flagging it there.

## Later

### Find Something to Watch (AI suggestions)

A "surprise me" feature that suggests a movie/show to watch next based on
what's already in the user's watchlist (genres, eagerness ratings, what
they've marked watched vs. still waiting on).

- ~~**v1 (no ML needed)**~~ — done. "🎲 Surprise me" in the top bar opens
  `SurpriseMe.jsx`: builds a genre profile from the 15 most-eager items
  (`src/lib/suggestions.js`, tested), queries TMDB `/discover` with the top
  genres, and picks a weighted-random title not already in the watchlist.
  "Add to watchlist" goes through the normal tier-picker flow. The user
  first picks their streaming services (remembered per browser, region from
  the time zone / browser locale), and Vault titles rated 6+ also shape the
  genre profile.
- **v2 (smarter):** a small content-based recommender (e.g. genre/cast/
  crew embedding similarity) run as a Cloud Function so it doesn't ship an
  ML runtime to the browser. Needs a call on whether to build this
  in-house or lean on TMDB/Trakt recommendation data.
- Possible v1 follow-ups: a "not interested" button that's remembered,
  and factoring in watched vs. still-waiting status (not used yet).

### PWA / offline install

Service worker so the app installs on a phone home screen and the
last-synced watchlist is viewable offline.

### Rotate the shared TMDB API key

Both the frontend (`src/services/tmdb.js`) and the Cloud Function
(`functions/index.js`) hardcode the same TMDB v3 key as a fallback. TMDB
v3 keys are meant to be used client-side and this isn't a secret leak,
but it's worth rotating to a key scoped only to this app so the two
surfaces aren't sharing one literal. Blocked on generating the new key
(requires the TMDB account, not something committable in code):
1. TMDB → Settings → API → generate a new v3 key, then revoke the old one
   (`4bb9fd44f0907b5158c6a6db356c360e`).
2. Set it as `VITE_TMDB_API_KEY` in `.env.local` for the frontend.
3. Set it as `tmdb.key` via `firebase functions:config:set` for the
   Cloud Function (see the "Now" email notifications item — it already
   reads from that config key).
4. Once both are confirmed working, remove the hardcoded fallback
   literal from `src/services/tmdb.js` and `functions/index.js` so the
   app only reads from env/config.
