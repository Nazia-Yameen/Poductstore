import {test,expect} from '@playwright/test';

test('Builtin_locators',  async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//USE FOLLOING IF THE PROJECT HAS ANY ALTTEXT
const logo = await page.getByAltText('company-branding')
//put asserion using expect to verify presence of logo

await expect(logo).toBeVisible();

//LOCATE username password using placeholder attribute 

await page.getByPlaceholder('Username').fill("Admin");

await page.getByPlaceholder('password').fill("admin123");

//login login button by using getbyrole .. so role is not attribute but we can use any attribute available for actionable buttons/links or selectbox like for button, lnk etc
//u can use any attribute available within this eg type, name etc.. 

await page.getByRole('button',{type:'submit'}).click(); //type is attribute, button is role 

//lets verify successful login if user name is displayed which keeps changing inornghrm.. use rltv x path


const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();  //pick text of login user name
await expect(await page.getByText(name)).toBeVisible;






})