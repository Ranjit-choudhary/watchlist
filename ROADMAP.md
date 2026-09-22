# Roadmap

Living list of what's next for the watchlist app, split by how soon it's
worth picking up. "Now" items are small enough to tackle in normal-sized
changes; "Later" items are deliberately deferred because they need design
decisions or are too large to do safely in one pass.

## Now

- **Finish or disable email notifications** — Settings.jsx tells users
  notifications are "powered by Firebase Cloud Functions and SendGrid,"
  but `functions/index.js` (the `checkNewEpisodes` scheduled function) is
  never deployed: it's missing from `firebase.json`'s config, and it still
  has placeholder values (`from: 'noreply@yourdomain.com'`, a
  `your-app-url.com` link, and no real SendGrid API key configured). Right
  now toggling it on in Settings saves a preference that nothing acts on.
  To ship it for real:
  - Add a `functions` block to `firebase.json` and deploy with
    `firebase deploy --only functions`.
  - Set `sendgrid.key` via Firebase config (or env var) and a real
    verified sender address.
  - Replace the hardcoded TMDB key in `functions/index.js` with
    `functions.config().tmdb.key` (mirrors the frontend's
    `VITE_TMDB_API_KEY` pattern in `.env.example`).
  - Until this is done, consider marking the Settings toggle "Coming
    soon" so it doesn't imply a working feature.

- **Automated tests** — no test runner exists yet. Highest-value first
  targets, since both are parsed from strings with no schema validation:
  - The `S<season> E<episode>` regex used to detect unwatched episodes
    (`App.jsx`'s `isItemUnwatched`/`getUnwatchedItems`, and the same
    pattern in `WatchCard.jsx`).
  - The pain-index sort (`App.jsx`'s `painIndex`).
  - Vitest is the natural fit given the Vite build setup already in place.

- **Clean up debug logging** — several `console.log` calls in `App.jsx`
  (TMDB result/detail dumps, migration progress, auto-refresh ticks) are
  left in from development and will spam the console for every user in
  production.

## Next

- **CSV/JSON export-import** — backup/restore the watchlist outside
  Firestore.
- **Shareable read-only watchlist link** — `?share=<uid>` view for
  friends; needs a scoped Firestore rule change (opt-in public-read flag
  per user) on top of the current `firestore.rules`, which currently
  denies all access outside the owning user.
- **Bulk actions** — multi-select cards to bulk-delete / re-tier / move
  to the "watch next" bucket.

## Later

### Find Something to Watch (AI suggestions)

A "surprise me" feature that suggests a movie/show to watch next based on
what's already in the user's watchlist (genres, eagerness ratings, what
they've marked watched vs. still waiting on).

Deferred because it needs real design work, not just an API call:
- **v1 (no ML needed):** use TMDB's own `/discover` endpoint, weighted by
  the genres of the user's highest-eagerness items. This alone would cover
  most of the value and could ship in a normal-sized change.
- **v2 (smarter):** a small content-based recommender (e.g. genre/cast/
  crew embedding similarity) run as a Cloud Function so it doesn't ship an
  ML runtime to the browser. Needs a call on whether to build this
  in-house or lean on TMDB/Trakt recommendation data.
- Needs a decision on where it lives in the UI (new tab vs. a widget on
  the empty state) before it's implemented.

### PWA / offline install

Service worker so the app installs on a phone home screen and the
last-synced watchlist is viewable offline.

### Rotate the shared TMDB API key

Both the frontend (`src/services/tmdb.js`) and the (currently undeployed)
Cloud Function hardcode the same TMDB v3 key as a fallback. TMDB v3 keys
are meant to be used client-side and this isn't a secret leak, but it's
worth rotating to a key scoped only to this app and moving the Cloud
Function's copy to Firebase config once notifications are deployed (see
"Now" above), rather than sharing the same literal across two surfaces.
