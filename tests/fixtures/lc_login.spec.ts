import {test as it, expect} from "./lc_login";
//demoqa
it('User lands on profile page after login', async ({loggedInPage}) => {
    await expect(loggedInPage).toHaveURL(/.*\/profile$/); // checking if the URL contains /profile/
    await expect(loggedInPage.locator('#userName-value')).toHaveText('groshnikova'); // checking if the text is correct
})
// it('User lands on profile page after login', async ({loggedInPage}) => {
//     await expect(loggedInPage).toHaveURL(/.*\/profile\//); // checking if the URL contains /profile/
//     await expect(loggedInPage.locator('.me-2 ~ h1')).toHaveText('Карина Грошникова'); // checking if the text is correct
// })
