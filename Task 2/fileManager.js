const fs = require('fs');
const fs1 = require("fs/promises")
const myownEmmiter = require('./events');

const fileManager=()=>{

    const writingFile = async () =>{
        await fs1.writeFile("sample.txt","Hello this is a Text File")
        .then(()=>console.log("Writing file is done in the Async Await Wrapper"))
}

writingFile();
setTimeout(()=>{
    fs.readFile("sample.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("Reading data in Callback Style : ",data)
        myownEmmiter.emit('log')
    
     })
    
     fs1.readFile("sample.txt","utf-8")
     .then((data)=>console.log("Reading data in Promise : ",data))
     .catch(err=>console.log(err))
    
    
    
    const data = fs.readFileSync("sample.txt","utf-8");
    
    console.log("Reading data in Synchronous : ", data)
},2000)



}


module.exports=fileManager