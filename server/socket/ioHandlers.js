// File where the fuctions passed into the handler are found
let helper = require('./helper.js'); // validates inputs
let xss = require('xss');
let gameManager = require('./gameManager');

var TAG = 'ioHandlers';
// This function will handle initial connections
var ioHandler = (socket)=>{

  socket.on('joinGame',(msg)=>{
    // msg = xss(msg);

  });

  socket.on('roomCode',(msg)=>{
    // For some reason here the 'msg' parameter passed in
    // is '[object Object]' which i assume means
    // it doesnt have a value
      if(helper.isValidRoomCode(msg)){
        

        // console.log(TAG + ' isValidRoomCode: true');
        // 1. Check for code in gameManager rooms object
        // 2. Then

      }else{
        // room does not exist, ask for another code
      };
  })

  // socket.on('test',(msg)=>{
  // });

  // Logic for starting room
  socket.on('createGame',(msg)=>{
    console.log(TAG+': createGame');

  });
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
