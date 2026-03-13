import { expect, test } from "@playwright/test";

test.describe("Projects", () => {
  test("project section renders current products", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#projects")).toContainText("1% Better Today");
    await expect(page.locator("#projects")).toContainText("1% Better Focus");
    await expect(page.locator("#projects")).toContainText("1% Better Edge");
  });

  test("about page shows build activity heatmap", async ({ page }) => {
    await page.goto("/about");

    await expect(page.locator("body")).toContainText("Build activity");
    await expect(page.locator("body")).toContainText("Recent GitHub activity");
    await expect(page.locator("body")).toContainText("Open GitHub");
  });
});
