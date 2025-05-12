const express = require('express')
const router = require('./routes/posts')
const cors = require('cors')
const helmet = require('helmet')
const errorHandling = require('./middleware/errorHandler')
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use("/api",router)



app.use((req, res, next) => {
    const error = new Error("Page Not Found");
    error.status = 404;
    next(error); 
  });

  app.use(errorHandling)
  

app.listen(process.env.PORT,()=>{
    console.log("Server is listening at port ",process.env.PORT)
})
