const {test, expect, request} = require('@playwright/test');
const loginpayload  = {userEmail: "amitp@gmail.com", userPassword: "@Aa12345678"};
const orderpayload = {"orders": [{"country": "India", "productOrderedId": "6581ca399fd99c85e8ee7f45"}]};

let token ; //Let is use when you are not preinitialised 
let orderID ; //Let is use when you are not preinitialised 
//https://rahulshettyacademy.com/api/ecom/auth/login
test.beforeAll(async()=>{

   const apicontext =  await request.newContext();
   const loginResponse =  await  apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:loginpayload
     } )

   const loginjson =  loginResponse.json()
   const token = loginjson.token; 
   console.log(token)

   const orderresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderpayload,
        headers: {
            "Authorization": token,
            "Content-Type" : 'application/json'
        }

    })

    const orderreponsejson = await orderresponse.json();
   console.log(orderreponsejson)
   orderID = orderreponsejson.orders[0] 
})

test('@Web Browser',async({browser,page})=>{

    page.addInitScript(value => {


        window.localStorage.setItem('token',value);
    },token)

    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("//*[contains(text(),'ZARA')]/parent::h5/parent::div//button/following-sibling::button/i").click()
    await page.locator("//*myorders").click()
    await page.locator("//*[tbody").waitFor()
    await page.locator("//*[tbody").waitFor()
    const rows = await page.locator("tbody tr")

    for(let i=0;i<await rows.count(); ++i)
    {

        const roworderid = await rows.nth(i).locator("th").textContent()
        if(orderID.includes(roworderid))
        {

            await rows.nth(i).locator("button").first().click()
            break;
        }
    }
    const orderIDdetails = await page.locator(".col-text").textcontent()
    await page.pause()
    expect(orderID.includes(orderIDdetails)).toBeTruthy()

    //2nd scenario enter the url directly to order
    //Setup the iteration and search the specific order matches order id
    //verify if the order id created is showing in the history page


})