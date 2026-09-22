import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { painIndex } from "./painIndex";

describe("painIndex", () => {
  const FIXED_NOW = new Date("2026-01-11T00:00:00Z").getTime(); // 10 days after lastDate below

  beforeEach(() => {
    vi.spyOn(Date, "now").mockReturnValue(FIXED_NOW);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns 0 when there's no lastDate", () => {
    expect(painIndex({ lastDate: null, eagerness: 5 })).toBe(0);
  });

  it("scales days-overdue by eagerness", () => {
    const item = { lastDate: "2026-01-01T00:00:00Z", eagerness: 3 };
    expect(painIndex(item)).toBe(30); // 10 days * 3
  });

  it("is 0 when eagerness is 0 regardless of how overdue", () => {
    const item = { lastDate: "2026-01-01T00:00:00Z", eagerness: 0 };
    expect(painIndex(item)).toBe(0);
  });

  it("floors partial days", () => {
    const item = { lastDate: "2026-01-01T12:00:00Z", eagerness: 1 }; // 9.5 days
    expect(painIndex(item)).toBe(9);
  });

  it("increases with eagerness for the same date", () => {
    const base = { lastDate: "2026-01-01T00:00:00Z" };
    expect(painIndex({ ...base, eagerness: 5 })).toBeGreaterThan(
      painIndex({ ...base, eagerness: 1 })
    );
  });
});
