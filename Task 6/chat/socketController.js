const express = require('express')
const {Server} = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io =new Server(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})


io.on('connection',(socket)=>{
    console.log("A user Connected" , socket.id)

    socket.on('chat message',(msg)=>{
        console.log(msg);
        io.emit('chat message',msg)
    })

    socket.on('disconnect',()=>{
        console.log(socket.id,"  disconnected ");
    })
})

server.listen(3000,()=>{
    console.log("Server Connected")
})
