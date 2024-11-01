const { HomePage } = require("./HomePage");
const { expect } = require("@playwright/test");


class CheckoutPage {

    constructor(page){

        this.page = page;
        this.HomePage = new HomePage(page);
        this.verifyProductTitle =  page.locator("//h4[@class='media-heading']");
        this.proceedforcheckoutbutton = page.locator("//button[@class='btn btn-success']");
        //this.chklabel =  this.page.getByLabel("Please choose your delivery location. ") ;
            
        //page.getByLabel("Please choose your delivery location. ") ;    
    }

    async submitforcheckout(productname){

        await this.HomePage.checkoutbutton.click();
        await expect(this.verifyProductTitle).toHaveText(productname);
        await this.proceedforcheckoutbutton.click();
        
        

    }

}

module.exports = {CheckoutPage};