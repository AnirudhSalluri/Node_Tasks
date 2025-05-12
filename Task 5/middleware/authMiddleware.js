const jwt = require('jsonwebtoken') 

const AuthMiddle = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(404).json("Not found")
    }
    try {
         const verified = jwt.verify(token,"ANIRUDH")
         req.user = verified;
         next()
    } catch (error) {
        return res.status(404).json("Token is Expired")
    }
}

module.exports=AuthMiddle;