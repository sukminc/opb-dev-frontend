import snapshot from "../../../the-closing-line/data/snapshot-2026-midterms.json";

export { snapshot };
export type SnapshotMarket = (typeof snapshot.races)[number] | (typeof snapshot.controls)[number];

export function divergence(market: SnapshotMarket): number | null {
  return market.kalshi_pct === null
    ? null
    : Math.abs(market.polymarket_pct - market.kalshi_pct);
}

export function percent(value: number | null): string {
  return value === null ? "n/a" : `${value.toFixed(1)}%`;
}

const gaps = snapshot.races.map((race) => divergence(race)!);
export const agreement = {
  count: gaps.filter((gap) => gap <= 2.5 + Number.EPSILON * 100).length,
  total: gaps.length,
  mean: (gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length).toFixed(1),
};
