const os = require('os');
const path = require('path');

const SystemSummary = ()=>{
    console.log("System Summary :")
    console.log("Platform : ",os.type())
    console.log("Cores : ",os.cpus().length)
    console.log("Free Memory :",Math.round(os.freemem()/1024**3),"GB");
    console.log("Home Directory : ",path.dirname(__filename))
}

module.exports=SystemSummary