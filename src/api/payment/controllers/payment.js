const axios = require('axios')

module.exports = {
  async makePayment(ctx, next) {
    const { totalAmount, description } = ctx.request.body

    const _gen_random_ref = () => {
      return (Math.random() + 1).toString(36).substring(2)
    }

    var data = JSON.stringify({
      "totalAmount": totalAmount,
      "description": description,
      "callbackUrl": "https://webhook.site/8b4bbd0a-5f98-4b3d-abbe-b9b49767f7d5",
      "returnUrl": "https://pama.vercel.app/give",
      "merchantAccountNumber": process.env.MERCHANT_ACCOUNT_NUMBER,
      "cancellationUrl": "http://hubtel.com/online",
      "clientReference": _gen_random_ref()
    });

    var config = {
      method: 'post',
      url: 'https://payproxyapi.hubtel.com/items/initiate',
      headers: {
        'Authorization': 'Basic dllqeVBFMDowOWM4YjQ3ZmJmOTI0OGU3OWVhYTJiYzg2ODk4ODYyZA==',
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config)
      .then(function (response) {
        ctx.body = { message: "Payment successful", data: JSON.stringify(response.data) }
      })
      .catch(function (error) {
        console.log("error")
        // ctx.body = { message: "Payment unsuccessful" }
      });
    
  },

  async callbackUrl(ctx, next) {
    console.log(ctx.request.body)
  }
}