const http = require('http')
require('dotenv').config();

const httpServer=()=>{

const server = http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET"){
      res.statusCode=200;
      res.write("Welcome HTML")
      res.end();
    }
    else if(req.url=="/about" && req.method=="GET"){
      res.statusCode=200;
      res.write("This is my first usage of http module")
      res.end();
    }
    else{
      res.statusCode=404;
      res.end("Page not found")
    }
})

server.listen(process.env.PORT2,()=>{
    console.log("Using http module,Server listening on port 3000")
})
}

module.exports = httpServer