const express = require('express')
const rateLimit = require('../security/rateLimiter')

const router = express.Router();
const user = {
    name: "Anirudh",
    password:"Ani123"
}

router.post('/login',rateLimit,(req,res)=>{
    const {name,password}= req.body;
    if(name!==user.name || password!==user.password){
        return res.status(401).json("Invalid Credentials")
    }
    else{
        res.status(200).json("Welcome Anirudh");
    }
})

module.exports = router