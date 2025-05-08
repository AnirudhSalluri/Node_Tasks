const timers=()=>{
    const timer = setInterval(()=>{
        const date = new Date();
        console.log("[Timer] " ,date.toLocaleTimeString() , " Tick")
    },3000)
    setTimeout(()=>{
        clearInterval(timer)
        console.log("Timer Stopped")
    },10000)
    
}


module.exports=timers