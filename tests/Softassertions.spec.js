const{test,expect} = require('@playwright/test');
//create ananomous function that uses sme ficture

test('Soft assertions',async({page})=>{

await page.goto('https://demoblaze.com/index.html');  //ACT OR WHEN

//hard assertions
/*
await expect(page).toHaveTitle('Store12')
await expect(page).toHaveURL('https://demoblaze.com/index.html')
await expect(page.locator('.navbar-brand')).toBeVisible();*/

//soft assertions

await expect.soft(page).toHaveTitle('Store12')
await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
await expect.soft(page.locator('.navbar-brand')).toBeVisible();



})