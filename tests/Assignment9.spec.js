const{test,expect} = require('@playwright/test')

test('@Web Browser9', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //page.locator("//*[text()='Free Access to InterviewQues/ResumeAssistance/Material']").click()

    //page.waitForTimeout(5000)

    //page.goBack()

    //page.goForward()

    //For hidden/Visible items

    // await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()

    // await page.locator("//input[contains(@value,'Hide')]").click()

    // await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()

    //If you want to handle pop ups

    //await page.on('dialog',dialog => dialog.accept())

    //await page.on('dialog',dialog => dialog.dismiss())
    //await page.pause() //If you want to pause your script somewhere 

    //await page.locator("#mousehover").hover() //If you want to hover on menu item

    const framepage = page.frameLocator("//iframe[@id='courses-iframe']")
    await framepage.locator("//a[@class='new-navbar-highlighter'  and text()='All Access plan']").click()
    await expect(framepage.locator("//*[contains(text(),'Join')]")).toBeVisible({timeout:5000})






})