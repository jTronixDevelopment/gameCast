// File where the fuctions passed into the handler are found
let validator = require('./helper.js'); // validates inputs
let xss = require('xss');
let gameManager = require('./gameManager');

// This function will handle initial connections
var ioHandler = (socket)=>{

  socket.on('joinGame',(msg)=>{
    msg = xss(msg);
  });

  socket.on('createRoom',(msg)=>{
  })

  socket.on('test',(msg)=>{
  });
  // Logic for starting room

  socket.on('startGame',(msg)=>{
  })

}

var gameHandler1 = (socket)=>{
  console.log("Someone Joined Game1")
  socket.on('test',()=>{ console.log("poop")})
}

var gameHandler2 = (socket)=>{
  console.log("Someone Joined Game2")
}

var gameHandler3 = (socket)=>{

}

module.exports = { gameHandler1 , gameHandler2, gameHandler3 , ioHandler };
