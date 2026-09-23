import { describe, it, expect } from "vitest";
import { ratingTier, groupByRatingTier, isFinished } from "./finished";

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
