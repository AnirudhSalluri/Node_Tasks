const middlewareforlog = (req,res,next)=>{
    const {name, password} = req.body;
    if(name=="Anirudh"&&password=="Ani123"){
        next();
    }
    else{
        res.status(400).json("Invalid Credentials");
    }
}

module.exports=middlewareforlog;