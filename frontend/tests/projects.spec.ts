import { expect, test } from "@playwright/test";

test.describe("Projects", () => {
  test("project section renders current products", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#projects")).toContainText("OPB Poker");
    await expect(page.locator("#projects")).toContainText("Personal project");
    await expect(page.locator("#projects")).toContainText("Active build");
    await expect(page.locator("#projects")).toContainText("Blue Jays Moneyball ETL");
    await expect(page.locator("#projects")).toContainText("TwelveLabs API Validator");
    await expect(page.locator("#projects")).toContainText("1% Better - This Website");
    await expect(page.locator("#projects")).toContainText("Proof of Work");
  });
});
