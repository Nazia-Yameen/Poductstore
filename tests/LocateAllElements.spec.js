import {test,expect} from '@playwright/test';

test('LocateAllElements',async({page})=>{


await page.goto('https://demoblaze.com/index.html')

//capture all the links from the website by using page.$$('a')

/* const links= await page.$$('a'); 

 //print the text of each captured link

 for(const link of links)  //extended for loop
 {
       const linktext = await link.textContent(); //it will capture text of each lin one by one
       console.log(linktext);

 }*/

 //now capture names of all products displaed on these links

 page.waitForSelector('//div[@id="tbodyid"]//div//h4/a')

 const products = await page.$$('//div[@id="tbodyid"]//div//h4/a');

 for(const pro of products)
 {
           const pr = await pro.textContent();
           console.log(pr)

 }

 }




)