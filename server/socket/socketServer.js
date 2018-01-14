
const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 5000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

const game1 = io.of('/game1'); // Name Space of game1
const game2 = io.of('/game2'); // Name Space of game2
const game3 = io.of('/game3'); // Name Space of game3
var ioHandlers = require('./ioHandlers.js'); // Will inport all functions from ioHandlers
// const PORT = process.env.PORT || 5000;

// socketServer.listen(PORT);
console.log("Socket Server Running on 4000!");

// Where all the function handlers are assigned to each name space.

io.on('connection',(socket)=>{ ioHandlers.ioHandler(socket) }); // Handles initial Connections

game1.on('connection',(socket)=>{ ioHandlers.gameHandler1(socket) })
game2.on('connection',(socket)=>{ ioHandlers.gameHandler2(socket) })
game3.on('connection',(socket)=>{ ioHandlers.gameHandler3(socket) })
