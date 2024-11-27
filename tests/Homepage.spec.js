const{test,expect} = require('@playwright/test');
//create ananomous function that uses sme ficture

test('Home page',async({page})=>{

await page.goto('https://demoblaze.com/index.html');  //ACT OR WHEN

const pagetitle = page.title;
console.log('page title is',pagetitle);

await expect(page).toHaveTitle('STORE');  //THEN OR ASSERT

const pageurl = page.url();
console.log('page url is',pageurl);

await expect(page).toHaveURL('https://demoblaze.com/index.html'); 
await page.close();

//AAA -- ARRANGE, ACT, ASSERT , JAVA: GIVEN WHEN THEN



})