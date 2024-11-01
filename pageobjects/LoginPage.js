class LoginPage {

    constructor(page){

        this.page = page;
        this.username =  page.locator("//input[@id='username']");
        this.password =  page.locator("//input[@id='password']");
        this.presscheckbox =  page.locator("//input[@type='checkbox']");
        this.signinbutton =  page.locator("//input[@name='signin']");
    
}


async loginecom(id,pass){

    await this.username.fill(id);
    await this.password.fill(pass);
    await this.presscheckbox.click();
    await this.signinbutton.click();
    
}


}

module.exports = {LoginPage};