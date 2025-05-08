 const fs = require('fs')
 const errorHandling=()=>{
 try{
   console.log(fs.readFileSync("sample1.txt","utf-8"))
 }catch(err){
    console.log("Triggering Error : File not Found")
 }
}

module.exports=errorHandling;