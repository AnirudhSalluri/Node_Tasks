const express = require('express')
const postdata = require('./postdata')
const postValidator = require('../validators/postValidator')
const middlewareforlog = require('../middleware/logger')

const router = express.Router();

router.get("/posts",middlewareforlog,(req,res)=>{
    try {
        res.status(200).json(postdata);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.post("/postdata",(req,res)=>{
    try {
       const error =  postValidator(req.body);
       if(error){
       return res.status(400).json({error:error.details[0].message})
       }
       res.status(200).json(req.body);

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router