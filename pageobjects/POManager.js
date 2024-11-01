const {LoginPage} = require('./LoginPage');
const {CheckoutPage} = require('./CheckoutPage');
const {HomePage} = require('./HomePage');

class POManager{

    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.CheckoutPage = new CheckoutPage(this.page);
        this.HomePage = new HomePage(this.page);    
    
    }

getLoginPage()
{
    return this.loginPage;
}

getCheckoutPage()
{
    return this.CheckoutPage;
}

getHomePage()
{
    return this.HomePage;
}

}

module.exports = {POManager};