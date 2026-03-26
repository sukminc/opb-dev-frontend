import { expect, test } from "@playwright/test";

test.describe("Projects", () => {
  test("project section renders current products", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#projects")).toContainText("Private AI Poker Backend");
    await expect(page.locator("#projects")).toContainText("1% Better Today");
    await expect(page.locator("#projects")).toContainText("1% Better - Focus");
    await expect(page.locator("#projects")).toContainText("1% Better - OS");
    await expect(page.locator("#projects")).toContainText("1% Better - This Website");
    await expect(page.locator("#projects")).toContainText("Current Main Build");
    await expect(page.locator("#projects")).toContainText("Secondary Builds");
    await expect(page.locator("#projects")).toContainText("Operating Layer");
    await expect(page.locator("#projects")).toContainText("Archive / Proof of Work");
    await expect(page.locator("#projects")).toContainText("Private build");
    await expect(page.locator("#projects")).toContainText("technical proof only");
    await expect(page.locator("#projects")).toContainText("Poker surface");
  });
});
