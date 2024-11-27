import {test,expect} from '@playwright/test';

test('Assertions', async({page})=>{

await page.goto('https://demo.nopcommerce.com/register');
await expect(page).toHaveURL('https://demo.nopcommerce.com/register');  //verify correct url is opened

//2. expect url to have a title use title tag on inspection
await expect(page).toHaveTitle('nopCommerce demo store. Register');

//expect url to have logo to be visible. so first locate logo element and then 

const logoelement=await page.locator('.header-logo')

await expect(logoelement).toBeVisible();

//check to be enabled
const searchbox=await page.locator('#small-searchterms')
await expect(searchbox).toBeEnabled;  //assertion to verify if checkbox is enabled/clickable


//check radio button

const radiobutton = await page.locator('#gender-male');
await  radiobutton.click();  //select radio button
await expect(radiobutton).toBeChecked;


//check newsletter checkbox is bydefault selected or not

const newsletter = await page.locator('#Newsletter');
await expect(newsletter).toBeChecked();

//verify if elements has attribute or not eg type id name

const registerbutton = await page.locator('#register-button');
await expect(registerbutton).toHaveAttribute('type','submit');

//verify if element has text  u can directly pass or can store in variable and then pass//pass complete text

await expect(await page.locator('.page-title h1')).toHaveText('Register');

//verify if element has partial text  u can directly pass or can store in variable and then pass//pass partial text

await expect(await page.locator('.page-title h1')).toContainText('ister');

//exprct to have value in inputfield

const emailinput = await page.locator('#Email');
await emailinput.fill('naxia@gmail.com');
await expect(emailinput).toHaveValue('naxia@gmail.com');

//verify to have count

const dropdowncount = await page.locator('select[name="DateOfBirthDay"] option')
await expect(dropdowncount).toHaveCount(32);


//verify negative tests by using not

const dropdowncount2 = await page.locator('select[name="DateOfBirthDay"] option')
await expect(dropdowncount2).not.toHaveCount(22);


})