import { describe, it, expect } from "vitest";
import {
  buildGenreProfile,
  topGenres,
  pickType,
  scoreCandidate,
  pickSuggestion,
  suggestionKey,
  seedWeight,
  genreIdsFor,
  genreChoices,
  eraRange
} from "./suggestions";

const seed = (type, eagerness, genreIds) => ({
  item: { type, eagerness },
  details: { genres: genreIds.map(id => ({ id })) }
});

describe("buildGenreProfile", () => {
  it("sums eagerness per genre, split by type", () => {
    const profile = buildGenreProfile([
      seed("movie", 5, [28, 12]),
      seed("movie", 2, [28]),
      seed("tv", 4, [18])
    ]);
    expect(profile.movie).toEqual({ 28: 7, 12: 5 });
    expect(profile.tv).toEqual({ 18: 4 });
  });

  it("skips seeds without details", () => {
    const profile = buildGenreProfile([{ item: { type: "tv", eagerness: 5 }, details: null }]);
    expect(profile.tv).toEqual({});
  });
});

describe("seedWeight", () => {
  it("uses eagerness for watchlist items", () => {
    expect(seedWeight({ eagerness: 4 })).toBe(4);
  });

  it("uses half the rating for finished titles the user liked", () => {
    expect(seedWeight({ finishedAt: 1, finalRating: 9 })).toBe(4.5);
  });

  it("ignores finished titles rated below 6", () => {
    expect(seedWeight({ finishedAt: 1, finalRating: 4 })).toBe(0);
  });
});

describe("topGenres", () => {
  it("returns the highest-weighted genre ids as numbers", () => {
    expect(topGenres({ 28: 7, 12: 5, 35: 1 }, 2)).toEqual([28, 12]);
  });
});

describe("pickType", () => {
  it("follows the genre weight split", () => {
    const profile = { movie: { 28: 1 }, tv: { 18: 3 } };
    expect(pickType(profile, () => 0.1)).toBe("movie"); // 0.4 < 1
    expect(pickType(profile, () => 0.5)).toBe("tv");    // 2 >= 1
  });

  it("falls back to a coin flip for an empty profile", () => {
    const empty = { movie: {}, tv: {} };
    expect(pickType(empty, () => 0.2)).toBe("movie");
    expect(pickType(empty, () => 0.8)).toBe("tv");
  });
});

describe("scoreCandidate", () => {
  it("rewards matching genres over rating alone", () => {
    const weights = { 28: 7 };
    const match = { genre_ids: [28], vote_average: 6 };
    const noMatch = { genre_ids: [99], vote_average: 9 };
    expect(scoreCandidate(match, weights)).toBeGreaterThan(scoreCandidate(noMatch, weights));
  });
});

describe("pickSuggestion", () => {
  const candidates = [
    { id: 1, media_type: "movie", genre_ids: [28], vote_average: 7 },
    { id: 2, media_type: "movie", genre_ids: [99], vote_average: 5 }
  ];

  it("excludes already-seen or owned titles", () => {
    const exclude = new Set([suggestionKey(candidates[0])]);
    expect(pickSuggestion(candidates, { 28: 10 }, exclude, () => 0).id).toBe(2);
  });

  it("returns null when everything is excluded", () => {
    const exclude = new Set(candidates.map(suggestionKey));
    expect(pickSuggestion(candidates, {}, exclude)).toBeNull();
  });

  it("favours the better genre fit", () => {
    // 1 scores 13.5, 2 scores 2.5; r = 0.5 * 16 = 8 lands in the first bucket.
    expect(pickSuggestion(candidates, { 28: 10 }, new Set(), () => 0.5).id).toBe(1);
  });
});

describe("genre filters", () => {
  const lists = {
    movie: [{ id: 28, name: "Action" }, { id: 35, name: "Comedy" }, { id: 878, name: "Science Fiction" }],
    tv: [{ id: 10759, name: "Action & Adventure" }, { id: 35, name: "Comedy" }, { id: 10764, name: "Reality" }],
  };

  it("maps a movie genre to its merged TV genre", () => {
    expect(genreIdsFor("tv", ["Action", "Comedy"], lists)).toEqual([10759, 35]);
  });

  it("maps a merged TV genre back to movie genres", () => {
    expect(genreIdsFor("movie", ["Action & Adventure"], lists)).toEqual([28]);
  });

  it("returns nothing for a genre the type doesn't have", () => {
    expect(genreIdsFor("movie", ["Reality"], lists)).toEqual([]);
  });

  it("offers movie genres plus TV-only ones for either", () => {
    expect(genreChoices("either", lists)).toEqual(["Action", "Comedy", "Science Fiction", "Reality"]);
  });
});

describe("eraRange", () => {
  it("returns decade bounds", () => {
    expect(eraRange("2010s")).toEqual({ from: "2010-01-01", to: "2019-12-31" });
  });

  it("computes 'last 2 years' from now", () => {
    expect(eraRange("new", new Date("2026-09-24T00:00:00Z"))).toEqual({ from: "2024-09-24", to: null });
  });

  it("is null for any era", () => {
    expect(eraRange(null)).toBeNull();
  });
});
