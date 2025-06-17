import { Locator, Page, expect } from "@playwright/test";

export class DragAndDrop {
  private readonly page: Page;
  private readonly dragEl: Locator;
  private readonly dropZone: Locator;
  private readonly dropList: Locator;
  constructor(page: Page) {
    this.page = page;
    this.dragEl = page.locator('[draggable="true"]');
    this.dropZone = page.locator('[id="mydropzone"]');
    this.dropList = page.locator("#droppedlist");
  }
  /**
   *
   * @param text - text content of the element to drag
   */
  public async dragAndDropElement(text: string): Promise<void> {
    const dragSource = this.dragEl.filter({ hasText: text });
    await dragSource.dragTo(this.dropZone);
    await this.verifyDrop(text);
  }
  public async dragAndDropElementOption2(text: string): Promise<void> {
    const dragSource = this.dragEl.filter({ hasText: text });
    await dragSource.hover(); // Hover over the element to ensure it's ready for drag
    await this.page.mouse.down(); // Press down the mouse button to start dragging
    await this.dropZone.hover(); // Hover over the drop zone to ensure it's ready for drop
    await this.page.mouse.up(); // Release the mouse button to drop the element
    await this.verifyDrop(text); // Verify the drop
  }
  /**
   *
   * @param text - text content of the element to verify in the drop list
   */
  public async verifyDrop(text: string) {
    const droppedListText = await this.dropList.textContent();
    expect(droppedListText).toContain(text);
  }
}
