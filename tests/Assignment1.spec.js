const{test, expect} = require('@playwright/test');
const{LoginPage} = require('../pageobjects/LoginPage');
const { HomePage } = require('../pageobjects/HomePage');
const { CheckoutPage } = require('../pageobjects/CheckoutPage');

test('@Web Browser', async ({browser,page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //Login page
    const lp = new LoginPage(page);
    const hp = new HomePage(page);
    const co = new CheckoutPage(page);

    const product = "Samsung Note 8";

    await lp.loginecom("rahulshettyacademy","learning");
    // await page.locator("//input[@id='username']").fill("rahulshettyacademy");
    // await page.locator("//input[@id='password']").fill("learning");
    // await page.locator("//input[@type='checkbox']").click();
    // await page.locator("//input[@name='signin']").click();
    
    //Home page 

    await hp.verifyHomepage();
    await hp.searchproductaddcart(product);
    await hp.verifycheckoutcount("1");
        
    // const checkoutbutton = page.locator("//a[@class='nav-link btn btn-primary']") ;

    // const f = await checkoutbutton.textContent()

    // expect(f).toContain("1") ;

    // console.log(f) ;

    //Checkout Page

    // await checkoutbutton.click()

    // expect(page.locator("//h4[@class='media-heading']")).toHaveText("Samsung Note 8");

    // await page.locator("//button[@class='btn btn-success']").click()

    await co.submitforcheckout(product);
   // page.getByLabel("Please choose your delivery location. ") ;

});