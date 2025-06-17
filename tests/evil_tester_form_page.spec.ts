import {expect, test as it} from '@playwright/test';

it.describe("EVIL TESTER FORM PAGE", () => {
   it('Fill all fields', async ({page}) => {
    await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html');

    await page.locator('[name="username"]').fill('John Doe');
    await page.locator('[name="password"]').pressSequentially('123456789',{delay: 90});
    await expect(page.locator('textarea:has-text("Comments...")')).toBeVisible();// needs 
    await page.locator('[name="comments"]').fill('This is a comment');
    await page.locator('[name="filename"]').setInputFiles('./loader_files/pasv.png');// needs explanation
    await page.locator('input[type="checkbox"][value="cb2"]').check();
    await page.locator('input[type="radio"][value="rd3"]').check();
    await page.selectOption('select[name="multipleselect[]"]', {label: 'Selection Item 1'});
    await page.selectOption('select[name="dropdown"]', {label: 'Drop Down Item 2'});
    await page.getByRole('button', {name: 'submit'}).click(); // needs explanation

    await expect(page.locator('p:has-text("You submitted a form. The details below show the values you entered for processing.")')).toBeVisible();


   }); 
});


