const express = require('express');
const httpServer = require('./httpServer')
const path = require('path')
const router = require('./routes/posts')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config(); 

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(cors())
app.use(helmet())

app.use("/api",router);



app.listen(process.env.PORT1,()=>{
    console.log("App Started",process.env.PORT1)
})


 httpServer();