const {Worker , parentPort,workerData,isMainThread} = require('worker_threads')

if(isMainThread){
    const worker = new Worker(__filename,{workerData:20})

    worker.on('message',(msg)=>{
        console.log(`[Factorial calculation] ${msg.num}! = ${msg.fact}`)
    })
}
else{
    let msg = 1;
    for(let i = 1 ; i<=workerData;i++){
        msg = i*msg
    }
    parentPort.postMessage({fact:msg,num:workerData})
}