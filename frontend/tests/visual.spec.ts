import { expect, test } from "@playwright/test";

test.describe("Visual QA", () => {
  async function expectStableScreenshot(
    target: Parameters<typeof expect>[0],
    name: string,
    overrides: { maxDiffPixels?: number; maxDiffPixelRatio?: number } = {},
  ) {
    await expect(target).toHaveScreenshot(name, {
      animations: "disabled",
      caret: "hide",
      maxDiffPixels: overrides.maxDiffPixels ?? 2500,
      maxDiffPixelRatio: overrides.maxDiffPixelRatio,
    });
  }

  test("home viewport stays on-brand", async ({ page }) => {
    await page.goto("/");
    await expectStableScreenshot(page, "home-top.png");
  });

  test("about viewport keeps its editorial layout", async ({ page }) => {
    await page.goto("/about");
    await expectStableScreenshot(page, "about-top.png");
  });

  test("sticky nav stays clean after scroll", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo({ top: 220, behavior: "instant" }));
    await expectStableScreenshot(page.locator("nav > div").first(), "home-nav-scrolled.png", {
      maxDiffPixels: 12000,
      maxDiffPixelRatio: 0.16,
    });
  });

  test("projects section keeps its structure", async ({ page }) => {
    await page.goto("/");
    const projects = page.locator("#projects");
    await projects.scrollIntoViewIfNeeded();
    await expectStableScreenshot(projects, "projects-section.png");
  });

  test("footer remains balanced on smaller layouts", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expectStableScreenshot(footer, "footer-section.png");
  });
});
