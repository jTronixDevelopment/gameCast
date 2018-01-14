const server = require('http').createServer();

const io = require('socket.io')(server, {
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

server.listen(4000);


var ioHandlers = require('./ioHandlers.js'); // Will export all functions from ioHandlers File

console.log("Socket Server Running on 4000!");

var game1 = io.of('/game1'); // Name Space of game1
var game2 = io.of('/game2'); // Name Space of game2
var game3 = io.of('/game3'); // Name Space of game3

io.on('connection',(socket)=>{ // Generic "/" route which everyone hits first

  // Logic for joining room
  console.log("Connection")

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
