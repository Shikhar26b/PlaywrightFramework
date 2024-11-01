const base = require('@playwright/test');

    exports.customtest = base.test.extend(
        {

            testDataForOrder : {

                username : "rahulshettyacademy",
                password : "learning",
                productName:"Blackberry",
                checkoutcount : 1

            }

        }

    )