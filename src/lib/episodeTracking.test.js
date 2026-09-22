import { describe, it, expect } from "vitest";
import { isUnwatched } from "./episodeTracking";

function tvItem(overrides = {}) {
  return {
    type: "tv",
    lastInfo: "S2 E5",
    watchedSeason: 2,
    watchedEpisode: 3,
    ...overrides
  };
}

describe("isUnwatched", () => {
  it("returns false for non-tv items", () => {
    expect(isUnwatched(tvItem({ type: "movie" }))).toBe(false);
  });

  it("returns false when there's no lastInfo", () => {
    expect(isUnwatched(tvItem({ lastInfo: null }))).toBe(false);
  });

  it("returns false when the user isn't tracking watched progress", () => {
    expect(isUnwatched(tvItem({ watchedSeason: null }))).toBe(false);
  });

  it("returns false when lastInfo doesn't match the expected format", () => {
    expect(isUnwatched(tvItem({ lastInfo: "Season 2" }))).toBe(false);
  });

  it("returns true when a newer season has aired", () => {
    expect(isUnwatched(tvItem({ lastInfo: "S3 E1", watchedSeason: 2 }))).toBe(true);
  });

  it("returns true when a newer episode has aired in the same season", () => {
    expect(
      isUnwatched(tvItem({ lastInfo: "S2 E5", watchedSeason: 2, watchedEpisode: 3 }))
    ).toBe(true);
  });

  it("returns false when caught up exactly", () => {
    expect(
      isUnwatched(tvItem({ lastInfo: "S2 E3", watchedSeason: 2, watchedEpisode: 3 }))
    ).toBe(false);
  });

  it("returns false when ahead somehow (shouldn't happen, but shouldn't glow)", () => {
    expect(
      isUnwatched(tvItem({ lastInfo: "S2 E1", watchedSeason: 2, watchedEpisode: 3 }))
    ).toBe(false);
  });

  it("returns false for a season behind with no episode number tracked yet", () => {
    expect(
      isUnwatched(tvItem({ lastInfo: "S2 E5", watchedSeason: 2, watchedEpisode: null }))
    ).toBe(false);
  });

  it("handles multi-digit season/episode numbers", () => {
    expect(
      isUnwatched(tvItem({ lastInfo: "S10 E12", watchedSeason: 10, watchedEpisode: 11 }))
    ).toBe(true);
  });
});
