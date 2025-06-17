import { test as it, expect, FrameLocator } from "@playwright/test";

it.describe("Iframe", () => {
  it("iframe test", async ({ page }) => {
    const url = "https://www.lambdatest.com/selenium-playground/nested-frames/";
    await page.goto(url);

    const frameBottom: FrameLocator = page.frameLocator(
      "[name='frame-bottom']"
    );
    const leftFrame: string | null = await frameBottom
      .frameLocator("[name='frame-left']")
      .locator("body")
      .textContent();

    const middleFrame: string | null = await frameBottom
      .frameLocator("[name='frame-middle']")
      .locator("body")
      .textContent();

    const rightFrame: string | null = await frameBottom
      .frameLocator("[name='frame-right']")
      .locator("body")
      .textContent();

    //Assertions: the text content of the frames TIP: toBe is used for exact match, toContain is used for partial match
    expect(leftFrame).toContain("Left");
    expect(middleFrame).toContain("Middle");
    expect(rightFrame).toContain("Right");
  });
});
