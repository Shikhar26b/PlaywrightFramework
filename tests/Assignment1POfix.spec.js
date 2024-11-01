const{test, expect} = require('@playwright/test');
const{POManager} = require('../pageobjects/POManager')
const{customtest}=require('../utils/test-base')



// const{LoginPage} = require('../pageobjects/LoginPage');
// const { HomePage } = require('../pageobjects/HomePage');
// const { CheckoutPage } = require('../pageobjects/CheckoutPage');

//for(const data of dataset){

customtest(`@Web client app login for `, async ({page,testDataForOrder})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const PO = new POManager(page);
    const lp = PO.getLoginPage();
    const hp = PO.getHomePage();
    const co = PO.getCheckoutPage();


    const product = testDataForOrder.productName;
    const checkoutcount = testDataForOrder.checkoutcount;
    const username = testDataForOrder.username;
    const password = testDataForOrder.password;

    //login Page
    await lp.loginecom(username,password);
    
    //Home page 

    await hp.verifyHomepage();
    await hp.searchproductaddcart(product);
    await hp.verifycheckoutcount(checkoutcount.toString());
        
    //Checkout Page

    await co.submitforcheckout(product);
   // page.getByLabel("Please choose your delivery location. ") ;

});

//}