module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/payment',
            handler: 'payment.makePayment',
            config: {
                auth: false
            }
        },
        {
            method: 'POST',
            path: '/callback',
            handler: 'payment.callbackUrl',
            config: {
                auth: false
            }
        }
    ]
}