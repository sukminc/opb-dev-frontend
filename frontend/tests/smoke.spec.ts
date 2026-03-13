import { expect, test } from "@playwright/test";

test.describe("Responsive smoke", () => {
  test("home page loads without page errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/");
    await expect(page.locator("body")).toContainText("Ship small.");
    await expect(page.locator("body")).toContainText("1.01 ^ 365 = 37.8x");

    expect(errors).toHaveLength(0);
  });

  test("mobile layout avoids horizontal overflow on home", async ({ page, browserName }) => {
    test.skip(browserName !== "chromium", "Mobile assertions run on chromium project only");

    await page.goto("/");

    const bodyBox = await page.locator("body").boundingBox();
    expect(bodyBox).not.toBeNull();

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 4);
  });

  test("mobile about page keeps activity section visible", async ({ page, browserName }) => {
    test.skip(browserName !== "chromium", "Mobile assertions run on chromium project only");

    await page.goto("/about");
    await page.locator("text=Build activity").scrollIntoViewIfNeeded();

    await expect(page.locator("text=Build activity")).toBeVisible();
    await expect(page.locator("text=Open GitHub")).toBeVisible();
  });
});
