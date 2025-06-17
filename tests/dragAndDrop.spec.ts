import { test as it, expect } from "@playwright/test";
import { DragAndDrop } from "../page_object/DragAndDrop";

it.describe("Drag and Drop Tests", () => {
    it('drag and drop element', async ({ page }) => {
        // Initialize the DragAndDrop page object
        const dragAndDrop = new DragAndDrop(page);
        const url = 'https://www.lambdatest.com/selenium-playground/drag-and-drop-demo';
        await page.goto(url);

        //Perform drag and drop using the first method
        await dragAndDrop.dragAndDropElement("Draggable 1");
        await dragAndDrop.dragAndDropElement("Draggable 2");

        //Reload the page to reset the state
        await page.reload();

        // Perform drag and drop using the second method
        await dragAndDrop.dragAndDropElementOption2("Draggable 1");
        await dragAndDrop.dragAndDropElementOption2("Draggable 2");
    });
});