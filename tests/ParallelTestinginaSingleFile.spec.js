const{test,expect} = require('@playwright/test')

//If you want to run all the test in a single file in parallel mode

test.describe.configure({mode:'parallel'});

test('@Web Browser1', async ({page})=>{

    await page.goto("https://www.google.com/");

});


test('@Web Browser2', async ({page})=>{

    await page.goto("https://www.youtube.com/");

});


test('Browser3', async ({page})=>{

    await page.goto("https://www.udemy.com/");

});