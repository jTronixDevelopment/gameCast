// File where the fuctions passed into the handler are found
let validator = require('./helper.js'); // validates inputs
let xss = require('xss');
let gameManager = require('./gameManager');

// This function will handle initial connections

var ioHandler = (socket)=>{
  let io = socket.nsp.server.nsps['/'];
  socket.on('joinGame',(msg)=>{

  });

  socket.on('createRoom',(msg)=>{
    // TV
  })

  socket.on('test',(msg)=>{

  });

  socket.on('roomCode',(msg)=>{
    
  })

  socket.on('disconnect',()=>{

  })

  // Logic for starting room

  socket.on('startGame',(msg)=>{
  })
}

var gameHandler1 = (socket)=>{
  let io = socket.nsp.server.nsps['/game1'];
  console.log("Someone Joined Game1");
  socket.on('test',()=>{ console.log("poop")});
}

var gameHandler2 = (socket)=>{
  let io = socket.nsp.server.nsps['/game2'];
  console.log("Someone Joined Game2");
}

var gameHandler3 = (socket)=>{
  let io = socket.nsp.server.nsps['/game3'];
  console.log("Someone Joined Game3");
}

module.exports = { gameHandler1 , gameHandler2, gameHandler3 , ioHandler };
