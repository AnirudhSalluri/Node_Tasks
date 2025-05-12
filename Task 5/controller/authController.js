const mongoose = require('mongoose')
const User = require('../models/User')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected");
})

const Register = async(req,res)=>{
    const {name,password}=req.body;
    const existinguser = await User.findOne({name})
    console.log(existinguser)
    if(existinguser){
        return res.status(500).json("User Already Exist")
    }
    const newUser = new User({
        name,
        password
    })

    const user = await newUser.save();
    res.status(200).json(user)
}

const Login = async(req,res)=>{
    const {name,password} = req.body;
    const findinguser = await User.findOne({name})
    if(!findinguser){
        return res.status(404).json("User Not found")
    }
    if(password!=findinguser.password){
        return res.status(500).json("Incorrect password")
    }
    const token = jwt.sign({findinguser},'ANIRUDH',{expiresIn:"1h"})
    res.cookie('token',token,{expiresIn:'1h'})
    res.status(200).json(token);
}

const Profile = async(req,res)=>{
    res.status(200).json(req.user)
} 

module.exports = {Register,Login,Profile}