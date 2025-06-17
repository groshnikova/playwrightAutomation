import {test as it, expect} from '@playwright/test';
import { DateOfBirth } from '../page_object/DateOfBirth';

it.describe("Date of Birth", () => {
    it('Navigate to date of birth page', async ({page}) => {
        const dateOfBirth = new DateOfBirth(page);
        await dateOfBirth.navigateToDateOfBirthPage();
        await dateOfBirth.verifyHeader();
        await dateOfBirth.dateOfBirthFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/automation-practice-form/);

    })
})