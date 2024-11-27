import {test,expect} from '@playwright/test'; //import test and expect from playwright

test('Locators', async({page})=>{    //create anonymous function

    await page.goto('https://demoblaze.com/index.html');

    //click on the login button by using any locator i.e. property/attribute(name, class,id etc) or xpath etc

    await page.locator('id=login2').click;   //using name attribute along with its value

    //or you can write above thing in a simpler way as

    await page.click('id=login2');   //simply specify 

    //fill the login form by using css selector

   // await page.locator('#loginusername').fill(nazia);

   //other way to write this is as follows fill(element, value)

   await page.fill('#loginusername', 'nazia'); 
  // await page.type('#loginusername','nazia');

  //now enter password as follows using css

  await page.fill('#loginpassword','nazia');

  //click on login button by using xpath pickby using chrome extension

  await page.click("//button[normalize-space()='Log in']")

  //verify logout button presence to validate login by first locating this use xpath to locate

 const logoutlink =  page.locator("//a[@id='logout2']")

  await expect(logoutlink).toBeVisible;

  await page.close;



})