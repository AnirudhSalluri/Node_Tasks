const EventEmitter = require('events');

    const myownEmmiter = new EventEmitter();
    myownEmmiter.on("log",()=>{
        console.log("Log Event : sample.txt")
    })
module.exports=myownEmmiter