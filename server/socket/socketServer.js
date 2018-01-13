const socketServer = require('http').createServer();
const io = require('socket.io')(server, {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});
const game1 = io.of('/game1'); // Name Space of game1
const game2 = io.of('/game2'); // Name Space of game2
const game3 = io.of('/game3'); // Name Space of game3
var ioHandlers = require('./ioHandlers.js'); // Will inport all functions from ioHandlers

socketServer.listen(4000);
console.log("Socket Server Running on 4000!");

// Where all the function handlers are assigned to each name space.

io.on('connection',(socket)=>{ ioHandlers.ioHandler(socket) }); // Handles initial Connections

game1.on('connection',(socket)=>{ ioHandlers.gameHandler1(socket) })
game2.on('connection',(socket)=>{ ioHandlers.gameHandler2(socket) })
game3.on('connection',(socket)=>{ ioHandlers.gameHandler3(socket) })
