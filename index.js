const express = require('express');
const app = express(); const http = require('http');
const server = http.createServer(app);
const url=require('url')
const io= require("socket.io")(server,{cors:{origin:"*"}}); 


app.use(express.static(__dirname))

app.set('view engine','hbs')


app.get('/',(req,res)=>{
    res.render('index')
})


server.listen(process.env.PORT||6060, () => { console.log('listening on *:6060'); });

io.on('connection',socket=>{
   console.log(socket.id)

   socket.on('client',data=>{
    socket.broadcast.emit('chat',data);
   })
   
})


