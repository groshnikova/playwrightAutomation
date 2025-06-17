import {Locator, Page, expect} from "@playwright/test";

export class Droppable {
    private readonly page: Page;
    private readonly dragEl: Locator;
    private readonly dropZone: Locator;
    constructor(page: Page){
        this.page = page;
        this.dragEl = page.locator('#draggable');
        this.dropZone = page.locator('#droppable').first();
    }

    async dragAndDropElement(text: string): Promise<void> {
        await this.dragEl.dragTo(this.dropZone);
        await this.verifyDrop(text);
    }
    async dragAndDropElementOption2(text: string): Promise<void> {
        await this.dragEl.hover(); // Hover over the element to ensure it's ready for drag
        await this.page.mouse.down(); // Press down the mouse button to start dragging
        await this.dropZone.hover(); // Hover over the drop zone to ensure it's ready for drop
        await this.page.mouse.up(); // Release the mouse button to drop the element
        await this.verifyDrop(text); // Verify the drop
    }

    async verifyDrop(text: string) {
        const droppedText = await this.dropZone.textContent();
        expect(droppedText).toContain(text);
    }
}