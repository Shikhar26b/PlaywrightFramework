class APIutils {

    constructor(apicontext,orderpayload){

        this.context = apicontext
        this.payload = orderpayload

    }

    async gettoken(){


        const loginResponse =  await  context.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data:loginpayload
             } )
        
           const loginjson =  loginResponse.json()
           const token = loginjson.token; 
           console.log(token)

           return token ;

    }

    async getOrderID(){

        const orderresponse = await apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data:payload,
                headers: {
                    "Authorization": token,
                    "Content-Type" : 'application/json'
                }
        
            })
        
            const orderreponsejson = await orderresponse.json();
           console.log(orderreponsejson)
           orderID = orderreponsejson.orders[0] 

           return orderID ;

    }


}

module.exports = {APIutils};