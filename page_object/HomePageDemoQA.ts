import {Page} from "@playwright/test";

export class HomePageDemoQA {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async gotoweb(path: string){
        await this.page.goto(path);
        console.log(`Navigated to: ${this.page.url()}`);
    }
}


