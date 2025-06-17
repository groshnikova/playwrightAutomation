import { Locator, Page } from "@playwright/test";

export class DQNewTabPage {
    page: Page;
    newTabLink: Locator;
    newWindowLink: Locator;
    newWindowMessageLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.newTabLink = page.locator('#tabButton');
        this.newWindowLink = page.locator('#windowButton');
        this.newWindowMessageLink = page.locator('#messageWindowButton');
    }

    async navigateToUrl() {
        await this.page.goto('https://demoqa.com/browser-windows');
    }
    
    async openNewTab() {
        await this.newTabLink.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newTabLink.click()
        ])
        await newPage.waitForLoadState(); // Wait for the new page to load completely
        return newPage; // Return the new page object
    }

    async openNewWindow() {
        await this.newWindowLink.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newWindowLink.click()
        ])
        await newPage.waitForLoadState(); // Wait for the new page to load completely
        return newPage; // Return the new page object
    }

    async openNewWindowMessage(){
        await this.newWindowMessageLink.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.newWindowMessageLink.click()
        ])
        await newPage.waitForLoadState(); // Wait for the new page to load completely
        return newPage; // Return the new page object
    }

}