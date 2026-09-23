import React, { useEffect, useRef, useState } from "react";
import { batchRefreshDetails, discoverTitles, getGenreLists, getProviderList, posterUrl } from "../services/tmdb";
import {
  SEED_COUNT,
  seedWeight,
  buildGenreProfile,
  topGenres,
  pickType,
  pickSuggestion,
  suggestionKey,
  genreIdsFor,
  genreChoices,
  ERAS,
  eraRange
} from "../lib/suggestions";

const MAX_ATTEMPTS = 4;
const NO_FILTERS = { type: "either", genres: [], era: null };
const TYPE_OPTIONS = [
  { id: "either", label: "Either" },
  { id: "movie", label: "Movies" },
  { id: "tv", label: "Series" },
];
const SERVICES_KEY = "surprise_providers";

function loadSavedServices() {
  try {
    return JSON.parse(localStorage.getItem(SERVICES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveServices(ids) {
  try {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(ids));
  } catch {}
}

export default function SurpriseMe({ items, onAdd, onClose }) {
  const [step, setStep] = useState("services"); // "services" | "filters" | "suggest"
  const [providers, setProviders] = useState(null);
  const [selected, setSelected] = useState(loadSavedServices);
  const [genreLists, setGenreLists] = useState({ movie: [], tv: [] });
  const [filters, setFilters] = useState(NO_FILTERS);

  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exhausted, setExhausted] = useState(false);

  const profilePromise = useRef(null);
  const profileRef = useRef(null);
  const genreNamesRef = useRef({});
  const seenRef = useRef(new Set());

  useEffect(() => {
    getGenreLists().then(setGenreLists);
    getProviderList().then(list => {
      setProviders(list);
      // Drop saved services that aren't offered in this region any more.
      setSelected(prev => prev.filter(id => list.some(p => p.id === id)));
    });

    // Build the taste profile in the background while services are picked.
    // Details are usually already cached by the auto-refresh.
    profilePromise.current = (async () => {
      const seeds = items
        .filter(i => seedWeight(i) > 0)
        .sort((a, b) => seedWeight(b) - seedWeight(a))
        .slice(0, SEED_COUNT);
      const results = await batchRefreshDetails(seeds, 250, { stopOnNetworkError: true });
      profileRef.current = buildGenreProfile(results);
      for (const { details } of results) {
        for (const g of details?.genres || []) genreNamesRef.current[g.id] = g.name;
      }
    })();
  }, []);

  const toggle = id =>
    setSelected(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));

  const allSelected = providers?.length > 0 && selected.length === providers.length;
  const toggleAll = () => setSelected(allSelected ? [] : providers.map(p => p.id));

  const next = async (activeFilters = filters) => {
    setLoading(true);
    await profilePromise.current;
    const profile = profileRef.current || { movie: {}, tv: {} };
    const owned = new Set(items.map(i => `${i.type}_${i.tmdbId}`));
    const exclude = new Set([...owned, ...seenRef.current]);

    const range = eraRange(activeFilters.era);
    const chosenGenres = activeFilters.genres;

    let pick = null;
    for (let attempt = 0; attempt < MAX_ATTEMPTS && !pick; attempt++) {
      let type = activeFilters.type === "either" ? pickType(profile) : activeFilters.type;
      let genres;
      if (chosenGenres.length) {
        // Genres the user picked are never dropped. With "either", switch
        // type if the picked genres only exist on the other one (e.g. Reality).
        genres = genreIdsFor(type, chosenGenres, genreLists);
        if (!genres.length && activeFilters.type === "either") {
          type = type === "movie" ? "tv" : "movie";
          genres = genreIdsFor(type, chosenGenres, genreLists);
        }
      } else {
        // Taste-based genres; the later attempts drop them, since a small
        // set of services may not carry much in your favourite genres.
        genres = attempt < 2 ? topGenres(profile[type]) : [];
      }
      const page = 1 + Math.floor(Math.random() * (attempt < 2 ? 3 : 5));
      const candidates = await discoverTitles(type, {
        genreIds: genres,
        page,
        providerIds: selected,
        dateFrom: range?.from,
        dateTo: range?.to
      });
      pick = pickSuggestion(candidates, profile[type], exclude);
    }

    if (pick) seenRef.current.add(suggestionKey(pick));
    setSuggestion(pick);
    setExhausted(!pick);
    setLoading(false);
  };

  const start = (activeFilters = filters) => {
    setFilters(activeFilters);
    setStep("suggest");
    next(activeFilters);
  };

  const setType = type => setFilters(f => ({ ...f, type, genres: [] }));
  const toggleGenre = name =>
    setFilters(f => ({
      ...f,
      genres: f.genres.includes(name) ? f.genres.filter(g => g !== name) : [...f.genres, name]
    }));

  const filterSummary = [
    filters.type !== "either" && (filters.type === "movie" ? "Movies" : "Series"),
    filters.genres.length > 0 && filters.genres.join(", "),
    filters.era && ERAS.find(e => e.id === filters.era)?.label,
  ].filter(Boolean);

  const matchedGenres = suggestion
    ? (suggestion.genre_ids || [])
        .filter(id => profileRef.current?.[suggestion.media_type]?.[id])
        .map(id => genreNamesRef.current[id])
        .filter(Boolean)
        .slice(0, 3)
    : [];
  const year = (suggestion?.release_date || suggestion?.first_air_date || "").split("-")[0];
  const serviceNames = (providers || []).filter(p => selected.includes(p.id)).map(p => p.name);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">🎲 Something to watch</div>
          <button className="btn btn-ghost" type="button" onClick={onClose}>✕</button>
        </div>

        {step === "services" ? (
          <>
            <div style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "0.75rem" }}>
              Which services do you have?
            </div>
            {providers === null ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div className="summary-loading-spinner" style={{ margin: "0 auto" }}></div>
              </div>
            ) : providers.length === 0 ? (
              <div style={{ padding: "1rem 0", color: "#9ca3af", fontSize: "0.85rem" }}>
                Couldn't load streaming services. You can still get a pick from anywhere.
              </div>
            ) : (
              <div className="provider-grid">
                <button
                  type="button"
                  className={`provider-chip ${allSelected ? "selected" : ""}`}
                  onClick={toggleAll}
                >
                  <span style={{ fontSize: "1.6rem", lineHeight: "40px" }}>✨</span>
                  All
                </button>
                {providers.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    className={`provider-chip ${selected.includes(p.id) ? "selected" : ""}`}
                    onClick={() => toggle(p.id)}
                  >
                    {p.logo && <img src={p.logo} alt="" />}
                    {p.name}
                  </button>
                ))}
              </div>
            )}
            <div className="modal-footer surprise-footer">
              {providers?.length > 0 && selected.length === 0 && (
                <button type="button" className="btn btn-outline" onClick={() => setStep("filters")}>
                  Anywhere is fine
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => { saveServices(selected); setStep("filters"); }}
                disabled={providers === null || (providers.length > 0 && selected.length === 0)}
              >
                Next
              </button>
            </div>
          </>
        ) : step === "filters" ? (
          <>
            <div className="surprise-filter-label">Movie or series?</div>
            <div className="segmented">
              {TYPE_OPTIONS.map(o => (
                <button
                  key={o.id}
                  type="button"
                  className={filters.type === o.id ? "active" : ""}
                  onClick={() => setType(o.id)}
                >
                  {o.label}
                </button>
              ))}
            </div>

            <div className="surprise-filter-label">Genre <span>(any if none picked)</span></div>
            <div className="chip-row">
              {genreChoices(filters.type, genreLists).map(name => (
                <button
                  key={name}
                  type="button"
                  className={`filter-chip ${filters.genres.includes(name) ? "selected" : ""}`}
                  onClick={() => toggleGenre(name)}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="surprise-filter-label">Released</div>
            <div className="chip-row">
              {[{ id: null, label: "Any time" }, ...ERAS].map(e => (
                <button
                  key={e.id || "any"}
                  type="button"
                  className={`filter-chip ${filters.era === e.id ? "selected" : ""}`}
                  onClick={() => setFilters(f => ({ ...f, era: e.id }))}
                >
                  {e.label}
                </button>
              ))}
            </div>

            <div className="modal-footer surprise-footer">
              <button type="button" className="btn btn-ghost" onClick={() => setStep("services")}>
                ← Back
              </button>
              <div style={{ flex: 1 }} />
              <button type="button" className="btn btn-outline" onClick={() => start(NO_FILTERS)}>
                Skip
              </button>
              <button type="button" className="btn btn-primary" onClick={() => start()}>
                Find me something
              </button>
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div className="summary-loading-spinner" style={{ margin: "0 auto 1rem" }}></div>
                <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Finding something for you…</div>
              </div>
            ) : exhausted ? (
              <div style={{ textAlign: "center", padding: "2rem 0", color: "#9ca3af", fontSize: "0.9rem" }}>
                Couldn't find anything new{serviceNames.length || filterSummary.length ? " with those choices" : ""}.
                Try loosening the filters, or check your connection.
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: "0.9rem", marginBottom: "0.75rem" }}>
                  {suggestion.poster_path && (
                    <div
                      style={{
                        width: "90px",
                        height: "130px",
                        borderRadius: "10px",
                        backgroundImage: `url(${posterUrl(suggestion.poster_path)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        flexShrink: 0
                      }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, marginBottom: "0.15rem", fontSize: "1rem" }}>
                      {suggestion.title || suggestion.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.3rem" }}>
                      {suggestion.media_type.toUpperCase()}{year && ` • ${year}`}
                    </div>
                    {suggestion.vote_average > 0 && (
                      <span className="card-rating-pill">⭐ {suggestion.vote_average.toFixed(1)}</span>
                    )}
                    {matchedGenres.length > 0 && (
                      <div style={{ marginTop: "0.35rem", fontSize: "0.8rem", color: "#9ca3af" }}>
                        Because you like {matchedGenres.join(", ")}
                      </div>
                    )}
                  </div>
                </div>
                {suggestion.overview && (
                  <p style={{ margin: "0 0 0.75rem", fontSize: "0.85rem", lineHeight: 1.5, color: "#9ca3af" }}>
                    {suggestion.overview}
                  </p>
                )}
              </>
            )}

            <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              {!serviceNames.length
                ? "On any service"
                : allSelected
                  ? "On all your services"
                  : serviceNames.length > 3
                    ? `On: ${serviceNames.slice(0, 2).join(", ")} +${serviceNames.length - 2} more`
                    : `On: ${serviceNames.join(", ")}`}
              {filterSummary.length > 0 && ` · ${filterSummary.join(" · ")}`}
              {" · "}
              <button
                type="button"
                onClick={() => setStep("filters")}
                style={{ background: "none", border: "none", color: "#e50914", cursor: "pointer", padding: 0, fontSize: "inherit" }}
              >
                Change
              </button>
            </div>

            <div className="modal-footer surprise-footer">
              <button type="button" className="btn btn-outline" onClick={() => next()} disabled={loading}>
                Another one
              </button>
              {suggestion && !loading && (
                <button type="button" className="btn btn-primary" onClick={() => onAdd(suggestion)}>
                  Add to watchlist
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
