import {test as it, expect} from "@playwright/test";
import { Droppable } from "../page_object/Droppable";

it.describe("Droppable Tests", () => {
    it('drag and drop element', async ({page}) => {
        const droppable = new Droppable(page);
        const url = 'https://demoqa.com/droppable#google_vignette';
        await page.goto(url);

        // Perform drag and drop using the first method
        await droppable.dragAndDropElement("Dropped!");


    })
});