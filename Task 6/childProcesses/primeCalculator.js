const {fork } = require('child_process');


const child = fork('./child.js');

child.on('message',(msg)=>{
    console.log("[Prime calculation]", msg)
})
child.send({number:20});


