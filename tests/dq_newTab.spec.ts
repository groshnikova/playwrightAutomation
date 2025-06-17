import { test, expect } from "@playwright/test";
import { blockAds } from "../data/abortAds";
import { DQNewTabPage } from "../page_object/DQNewTabPage";

test.describe("New Tab Page Tests", () => {
  test("Should open a new tab and verify content on the new page", async ({
    page,
  }) => {
    await blockAds(page);
    // first tab
    const dqNewTabPage = new DQNewTabPage(page);
    await dqNewTabPage.navigateToUrl();
    // second tab
    const newTab = await dqNewTabPage.openNewTab();
    const textContent: string | null = await newTab.locator("h1").textContent();
    expect(textContent).toBe("This is a sample page");
  });

  test("Should open a new window and verify content on the new page", async ({
    page,
  }) => {
    await blockAds(page);
    // first tab
    const dqNewTabPage = new DQNewTabPage(page);
    await dqNewTabPage.navigateToUrl();
    // second tab
    const newWindow = await dqNewTabPage.openNewWindow();
    const textContent: string | null = await newWindow
      .locator("h1")
      .textContent();
    expect(textContent).toBe("This is a sample page");
  });
  test("Should open a new window message and verify content on the new page", async ({
    page,
  }) => {
    await blockAds(page);
    const dqNewTabPage = new DQNewTabPage(page);
    await dqNewTabPage.navigateToUrl();

    const newWindowMessage = await dqNewTabPage.openNewWindowMessage();
    const textContent: string | null = await newWindowMessage
      .locator("body")
      .textContent();

    expect(textContent).toContain(
      "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization."
    );
  });
});
