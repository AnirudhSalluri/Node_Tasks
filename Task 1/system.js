const {InfoModule} = require('./greet');
const figlet = require('figlet')

figlet("TASK 1",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
}).then(()=>{
    InfoModule();
})


