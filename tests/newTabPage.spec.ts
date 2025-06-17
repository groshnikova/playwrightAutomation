import { test as it, expect } from "@playwright/test";
import { NewTabPage } from "../page_object/NewTabPage";
import { describe } from "node:test";
import { blockAds } from "../data/abortAds";

describe("New Tab Page Tests", () => {
  it("Should open a new tab and verify content on the new page", async ({
    page,
  }) => {

    await blockAds(page);
    // first tab
    const newTabPage = new NewTabPage(page);
    await newTabPage.navigateToUrl();

    // second tab
    const newPage = await newTabPage.openNewTab();
    const textContent: string | null = await newPage
      .locator("h1")
      .textContent();

    expect(textContent).toContain(
      "Example of a new window page for Automation Testing Practice"
    );
  });
});
