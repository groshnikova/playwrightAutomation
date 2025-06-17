
import {expect, test as it} from '../page_object/base_page';

it.describe("Date Picker with fixture", () => {
    it('Navigate to date picker page with fixture', async ({datePicker, page}) => {
        await datePicker.navigateToDatePickerPage();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
        console.log(datePicker.page.url());
        await expect(datePicker.page).toHaveURL(/jquery-date-picker-demo/);
    });
})