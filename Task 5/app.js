const figlet = require('figlet')
const express = require('express')
const cookieParser = require('cookie-parser')
const router = require('./routes/auth')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use('/api',router);

app.listen(process.env.PORT,()=>{
    figlet("Server Started" , (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
})

