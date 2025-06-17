import {chromium, expect, test as it} from '@playwright/test';


it.beforeAll(() => {
    console.log('beforeAll');
});

it.describe.skip("Form Page", () => {
    it.beforeEach(() => {
        console.log('beforeEach');
    });

    it.afterEach(() => {
        console.log('afterEach');
    });
    it.afterAll(() => {
        console.log('afterAll');
    });
    it('test1',() =>{
        console.log('test1');
    });
    it('test2',() =>{
        console.log('test2');
    });
});

it.describe("FORM PAGE TYPE", () => {
    it('Fill all fields', async ({page}) => {
    //    const browser = await chromium.launch({headless: false}); // launching the browser
    //    const context = await browser.newContext(); // making a new context
    //    const page = await context.newPage(); // making a new page
       
       await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
       await page.pause();

       await page.locator('[id="name"]').fill('John Doe');
       await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type=\"email\"]')
       .pressSequentially("michael@gmail.com", {delay: 500});
       await page.locator('input[placeholder="Password"]').pressSequentially("Enter", {delay: 100});
       await page.locator('[for="companyname"]~[placeholder="Company"]').fill('LLC Harmony');
       await page.locator('label:has-text("Website") ~ input#websitename').fill('https://www.harmony.com');
       await page.selectOption('select[name="country"]', {label: 'United States'});
       await page.locator('label:has-text("City") ~ input#inputCity').fill('New York');
       await page.getByPlaceholder('Address 1').fill('123 Main St');
       await page.getByPlaceholder('Address 2').fill('Apt 4B');
       await page.getByRole('textbox', {name: 'State*'}).fill('NY');
       await page.getByRole('textbox', {name: 'Zip Code*'}).fill('10001');
       await page.getByRole('button', {name: 'Submit'}).click();

       await expect(page.locator('h2:has-text("Input form validation")')).toBeVisible();


    });
});