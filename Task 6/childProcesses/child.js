    process.on('message',msg=>{
        let isPrime = true;
        for(let i=2;i<Math.round(msg.number/2);i++){
            if(msg.number%i==0){
                isPrime= false;
                break;
            }
        }
            console.log(msg.number)
         process.send(isPrime?`${msg.number} is Prime number`:`${msg.number} is not a  prime number`)
    })
