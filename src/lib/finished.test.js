import { describe, it, expect } from "vitest";
import { ratingTier, groupByRatingTier, isFinished, vaultComeback, comebackLabel } from "./finished";

describe("ratingTier", () => {
  it("maps ratings to S–D", () => {
    expect([10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(r => ratingTier(r).id).join(""))
      .toBe("SSAABBCCDD");
  });
});

describe("isFinished", () => {
  it("is based on finishedAt", () => {
    expect(isFinished({ finishedAt: 123 })).toBe(true);
    expect(isFinished({ finishedAt: null })).toBe(false);
  });
});

describe("groupByRatingTier", () => {
  it("groups by tier, drops empty tiers, sorts by rating then recency", () => {
    const items = [
      { id: "a", finalRating: 7, finishedAt: 1 },
      { id: "b", finalRating: 10, finishedAt: 1 },
      { id: "c", finalRating: 8, finishedAt: 1 },
      { id: "d", finalRating: 8, finishedAt: 5 },
      { id: "e", finalRating: 2, finishedAt: 1 },
    ];
    const groups = groupByRatingTier(items);
    expect(groups.map(g => g.tier.id)).toEqual(["S", "A", "D"]);
    expect(groups[1].items.map(i => i.id)).toEqual(["d", "c", "a"]);
  });
});

describe("vaultComeback", () => {
  const base = { type: "tv", finishedAt: 1, finishedSeasons: 2, totalSeasons: 2, lastInfo: "S2 E8" };

  it("is null until TMDB lists a new season", () => {
    expect(vaultComeback(base)).toBeNull();
    expect(vaultComeback({ ...base, finishedSeasons: null, totalSeasons: 3 })).toBeNull();
    expect(vaultComeback({ ...base, type: "movie", totalSeasons: 3 })).toBeNull();
    expect(vaultComeback({ ...base, finishedAt: null, totalSeasons: 3 })).toBeNull();
  });

  it("reports announced, dated and airing seasons", () => {
    expect(vaultComeback({ ...base, totalSeasons: 3 }))
      .toEqual({ state: "announced", season: 3 });
    expect(vaultComeback({ ...base, totalSeasons: 3, nextEpisodeInfo: "S3 E1", nextEpisodeDate: "2027-01-10" }))
      .toEqual({ state: "dated", season: 3, date: "2027-01-10" });
    expect(vaultComeback({ ...base, totalSeasons: 3, lastInfo: "S3 E2", nextEpisodeInfo: "S3 E3", nextEpisodeDate: "2027-01-17" }))
      .toEqual({ state: "out", season: 3 });
  });

  it("labels each state", () => {
    expect(comebackLabel({ state: "announced", season: 3 })).toBe("Season 3 announced");
    expect(comebackLabel({ state: "out", season: 3 })).toBe("Season 3 is out");
    expect(comebackLabel({ state: "dated", season: 3, date: "2027-01-10" })).toMatch(/^Season 3 premieres .*2027/);
  });
});
