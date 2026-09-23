import { describe, it, expect } from "vitest";
import { needsCheck, RECHECK } from "./refreshPolicy";

const NOW = Date.parse("2026-09-24T12:00:00Z");
const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const ago = ms => NOW - ms;

describe("needsCheck", () => {
  it("checks items that have never been checked", () => {
    expect(needsCheck({ type: "tv" }, NOW)).toBe(true);
  });

  describe("tv", () => {
    it("skips a show whose next episode is still in the future", () => {
      const item = { type: "tv", nextEpisodeDate: "2026-10-15", lastCheckedAt: ago(2 * DAY) };
      expect(needsCheck(item, NOW)).toBe(false);
    });

    it("still re-checks a future-dated show weekly, to catch reschedules", () => {
      const item = { type: "tv", nextEpisodeDate: "2026-10-15", lastCheckedAt: ago(RECHECK.scheduled) };
      expect(needsCheck(item, NOW)).toBe(true);
    });

    it("checks as soon as the air date arrives, even if checked recently", () => {
      const item = {
        type: "tv",
        nextEpisodeDate: "2026-09-24",
        lastCheckedAt: Date.parse("2026-09-23T20:00:00Z")
      };
      expect(needsCheck(item, NOW)).toBe(true);
    });

    it("throttles repeat checks after the air date to every 12h", () => {
      const item = { type: "tv", nextEpisodeDate: "2026-09-24", lastCheckedAt: ago(2 * HOUR) };
      expect(needsCheck(item, NOW)).toBe(false);
      expect(needsCheck({ ...item, lastCheckedAt: ago(13 * HOUR) }, NOW)).toBe(true);
    });

    it("checks unannounced returning shows every few days", () => {
      const item = { type: "tv", nextEpisodeDate: null, lastCheckedAt: ago(1 * DAY) };
      expect(needsCheck(item, NOW)).toBe(false);
      expect(needsCheck({ ...item, lastCheckedAt: ago(RECHECK.unannounced) }, NOW)).toBe(true);
    });

    it("rarely checks ended shows", () => {
      const item = { type: "tv", nextEpisodeDate: null, showStatus: "Ended", lastCheckedAt: ago(10 * DAY) };
      expect(needsCheck(item, NOW)).toBe(false);
    });
  });

  describe("movies", () => {
    it("skips an unreleased movie until its release date", () => {
      const item = { type: "movie", lastDate: "2026-12-01", lastCheckedAt: ago(DAY) };
      expect(needsCheck(item, NOW)).toBe(false);
    });

    it("rarely checks long-released movies", () => {
      const item = { type: "movie", lastDate: "2020-01-01", lastCheckedAt: ago(10 * DAY) };
      expect(needsCheck(item, NOW)).toBe(false);
    });
  });
});
