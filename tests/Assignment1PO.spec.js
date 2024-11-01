const{test, expect} = require('@playwright/test');
const{POManager} = require('../pageobjects/POManager')
const dataset =  JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")))


// const{LoginPage} = require('../pageobjects/LoginPage');
// const { HomePage } = require('../pageobjects/HomePage');
// const { CheckoutPage } = require('../pageobjects/CheckoutPage');
//npx playwright test tests/Assignment1PO.spec.js --config playwright.config.js
//If you want to execute with any tag (npx playwright test ParallelTestinginaSingleFile.spec.js --grep '@Web')
//npx playwright test tests/Assignment1POfix.spec.js --config playwright.config1.js --project MobileDevice
//If you want to skip single test you can use test.skip()
//If you want to skip multiple test you can use test.describe.skip()
//If you want to run any specific test using tags npx playwright test --grep @API

//test.describe.configure({mode:'parallel'}); //If you wnat to run in parallel mode

for(const data of dataset)



test(`@Web client app login for "${data.product}"`, async ({browser,page})=>{

    //Test file will run in parallel
    //Individual test in file will run in an sequence
    //Each test file assign to 1 worker and playwright bydefault run 5 workers parallely

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const PO = new POManager(page);
    const lp = PO.getLoginPage();
    const hp = PO.getHomePage();
    const co = PO.getCheckoutPage();


    const product = data.product;
    const checkoutcount = data.checkoutcount;
    const username = data.username;
    const password = data.password;

    //login Page
    await lp.loginecom(username,password);
    
    //Home page 

    await page.waitForTimeout(10000);
    await hp.verifyHomepage();
    await hp.searchproductaddcart(product);
    await hp.verifycheckoutcount(checkoutcount.toString());
        
    //Checkout Page

    await co.submitforcheckout(product);
   // page.getByLabel("Please choose your delivery location. ") ;

});

