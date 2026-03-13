import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test("home nav links are present", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("a[href='/about']").first()).toBeVisible();
    await expect(page.locator("a[href='#projects']").first()).toBeVisible();
  });

  test("about link navigates correctly", async ({ page }) => {
    await page.goto("/");
    await page.locator("a[href='/about']").first().click();

    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator("body")).toContainText("This is a working season");
  });

  test("logo returns to home", async ({ page }) => {
    await page.goto("/about");
    await page.locator("a[href='/']").first().click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("body")).toContainText("Ship small.");
  });

  test("core pages return 200", async ({ page }) => {
    for (const path of ["/", "/about"]) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} returned non-200`).toBe(200);
    }
  });
});
