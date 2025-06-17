import { test as base, Page } from "@playwright/test";
import { DatePicker } from "./DatePicker";

export const test = base.extend<{ datePicker: DatePicker }>({
  // defining the fixture for datePicker
  datePicker: async ({ page }, use) => {
    await use(new DatePicker(page)); // Passing the DatePicker instance to the test
  },
});
export const expect = base.expect; // exporting the expect function from playwright test library
