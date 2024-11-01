const { test, expect } = require('@playwright/test');

let webcontext ;
test.beforeAll(async ({browser})=> {

   const context =  await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client/auth/login");
   await page.locator("//input[@id='userEmail']").fill("amitp@gmail.com");
   await page.locator("//input[@id='userPassword']").fill("@Aa12345678");
   await page.locator("//input[@value='Login']").click();
   await context.storageState({path: 'state.json'});
   webcontext = await browser.newContext({storageState: 'state.json'}); 

})

test('validate storage session',async() => {

  const page = await webcontext.newPage();  
  await page.goto("https://rahulshettyacademy.com/client/dashboard/dash");
  await page.locator("//b[contains(text(),'IPHONE 13 PRO')]/parent::h5/parent::div//button/i[contains(@class,'fa fa-shopping-cart')]").click();  
  await page.close();
  await browser.close();  



})