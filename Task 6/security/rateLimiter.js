const slowDown = require('express-slow-down')

const rateLimit = slowDown({
    windowMs : 1000*60*12,
    delayAfter : 3,
    delayMs : ()=>1000
})

module.exports= rateLimit;