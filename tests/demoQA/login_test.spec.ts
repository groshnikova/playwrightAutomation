import {test, expect} from '@playwright/test';


test.describe('Login Test', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://demoqa.com/books');
    });

    test('Verify authentication and logout button', async ({page,browserName}) => {
        const logOutButton = page.locator('.btn btn-primary');
        await expect(logOutButton).toHaveText('Log out');

        await page.screenshot({path: `screenshots/${browserName}-profile.png`});
    });
})