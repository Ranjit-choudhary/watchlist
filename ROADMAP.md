# Roadmap / Future Features

Ideas that are worth building but were deliberately deferred (too large to
do safely in one pass, or need design decisions first).

## Find Something to Watch (AI suggestions)

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

## Other deferred ideas

- **CSV/JSON export-import** — backup/restore the watchlist outside Firestore.
- **Shareable read-only watchlist link** — `?share=<uid>` view for friends;
  needs a scoped Firestore rule change (opt-in public-read flag per user).
- **Bulk actions** — multi-select cards to bulk-delete / re-tier / move to
  the "watch next" bucket.
- **PWA / offline install** — service worker so the app installs on a
  phone home screen and the last-synced watchlist is viewable offline.
- **Automated tests** — no test runner exists yet. Highest-value first
  targets: the pain-index sort, and the `S<season> E<episode>` regex used
  to detect unwatched episodes (`App.jsx`, `WatchCard.jsx`) since both are
  parsed from a string with no schema validation.
