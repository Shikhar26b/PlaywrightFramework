const { expect } = require("@playwright/test");

class HomePage {

    constructor(page){

        this.page = page;
        this.verifyHomePage =  page.locator("//a[text()='ProtoCommerce']");
        this.mobilelocator = page.locator("//h4[@class='card-title']");
        this.addtocartbutton =  page.locator("//button[@class='btn btn-info']");
        this.signinbutton =  page.locator("//input[@name='signin']");
        this.checkoutbutton = page.locator("//a[@class='nav-link btn btn-primary']");
    
}

async verifyHomepage(){
    await this.verifyHomePage.isVisible({timeout:2000})
}

async searchproductaddcart(searchproduct){

    const count = await this.mobilelocator.allTextContents().count;
    for (let i=0; i<4; i++){
        const a = await this.mobilelocator.nth(i).textContent() ;
        if( a.includes(searchproduct)){
            await this.addtocartbutton.nth(i).click();
            break;
        }
    }
}

async verifycheckoutcount(checkoutword){
    const f = await this.checkoutbutton.textContent()
    await expect(f).toContain(checkoutword) ;
    console.log(f) ;
}


}

module.exports = {HomePage};