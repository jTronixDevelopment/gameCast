//New Server
const express = require('express');
var app = express();
const path = require('path');

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);// For production

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));

//==============================================================================
//=== Socket IO Stuff ==========================================================
//==============================================================================

var ioHandlers = require('./socket/ioHandlers.js'); // Will export all functions from ioHandlers File

console.log(`Socket Server Running on ${process.env.PORT || 5000}!`);

var game1 = io.of('/game1'); // Name Space of game1
var game2 = io.of('/game2'); // Name Space of game2
var game3 = io.of('/game3'); // Name Space of game3

io.on('connection',(socket)=>{ // Generic "/" route which everyone hits first

  // Logic for joining room
  console.log("Connection Made")

  socket.on('joinGame',(msg)=>{
      if(msg === "game1"){

      } else {

      }
  })
  // Logic for starting room

  socket.on('startGame',()=>{
    console.log(msg);
  })

  // logic for leaving room

});

game1.on('connection',(socket)=>{ ioHandlers.gameHandler1(socket) })
game2.on('connection',(socket)=>{ ioHandlers.gameHandler2(socket) })
game3.on('connection',(socket)=>{ ioHandlers.gameHandler3(socket) })
