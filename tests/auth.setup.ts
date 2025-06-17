import {test as setup, expect} from '@playwright/test';

const authFile: string = "./.auth/user.json";   // Path to save the authentication state
setup('authentication', async ({page}) =>{
    //Navigate to the login page and login
    await page.goto('https://demoqa.com/login');
    await page.getByPlaceholder('UserName').fill('groshnikova');
    await page.getByRole('textbox', {name: 'Password'}).fill('Test12345!');
    await page.locator('#login').click();
    
    //verify that the user is logged in
    await page.waitForURL('https://demoqa.com/profile');
    await expect(page.locator('[id="userName-value"]')).toHaveText('groshnikova');

    //Save all steps to storageState
    await page.context().storageState({path: authFile});




})