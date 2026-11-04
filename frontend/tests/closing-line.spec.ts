import { expect, test } from "@playwright/test";

test("intro leads to the frozen season report and back to scoring", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/closing-line");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("The Closing Line — a OnePercentBetter project");
  await page.getByRole("link", { name: /Season 1 · 2026 Midterms/ }).click();
  await expect(page).toHaveURL(/\/closing-line\/midterms-2026$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Polymarket vs Kalshi");
  await expect(page.getByRole("heading", { name: "Polymarket", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Read the scoring guide" }).click();
  await expect(page).toHaveURL(/\/closing-line#scoring$/);
  await expect(page.getByRole("heading", { name: "02 / How scoring works" })).toBeVisible();
  expect(errors).toEqual([]);
});

test("frozen board preserves missing data, priced subjects, and pending results", async ({ page }) => {
  const response = await page.goto("/closing-line/midterms-2026");
  expect(response?.status()).toBe(200);
  const table = page.getByRole("table");
  const markets = table.getByRole("row").filter({ has: page.getByRole("cell", { name: "Awaiting results", exact: true }) });
  await expect(markets).toHaveCount(16);
  for (const row of await markets.all()) {
    // A price never becomes an inferred election result or a fabricated score.
    await expect(row.getByRole("cell", { name: "Awaiting results", exact: true })).toHaveCount(3);
  }
  const florida = table.getByRole("row", { name: /Florida special/ });
  await expect(florida).toContainText("15.5%");
  await expect(florida).toContainText("5.9%");
  await expect(florida).toContainText("9.6 pts");
  await expect(table.getByRole("row", { name: /House \(D\)/ }).getByRole("cell", { name: "n/a", exact: true })).toHaveCount(2);
  const nebraska = table.getByRole("row", { name: /Nebraska/ });
  await expect(nebraska).toContainText("Ricketts (R incumbent) vs independent challenger");
  await expect(nebraska).toContainText("63.0%");
  await expect(nebraska).toContainText("62.0%");
  await expect(page.getByText(/The Kalshi window overlaps/)).toBeVisible();
});

test("project discovery and report work without page-level horizontal overflow", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /A OnePercentBetter project The Closing Line/ }).click();
  await expect(page).toHaveURL(/\/closing-line$/);
  for (const path of ["/closing-line", "/closing-line/midterms-2026"]) {
    await page.goto(path);
    const sizes = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }));
    expect(sizes.scroll).toBeLessThanOrEqual(sizes.client + 1);
  }
  const region = page.getByRole("region", { name: /Election market comparison/ });
  await region.focus();
  await expect(region).toBeFocused();
});
