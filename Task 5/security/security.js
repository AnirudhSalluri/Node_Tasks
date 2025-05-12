const rateLimit = require('express-rate-limit')

const LimitFunc = rateLimit({
    windowMs:5*60*1000,
    max:3,
    message:"Toooooooo many attempts"
})

module.exports=LimitFunc;