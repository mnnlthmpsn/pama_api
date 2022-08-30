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
    ]
}