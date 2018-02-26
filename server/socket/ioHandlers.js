// File where the fuctions passed into the handler are found
let helper = require('./helper.js'); // validates inputs
let xss = require('xss');
let gameManager = require('./gameManager');

var TAG = 'ioHandlers';
// This function will handle initial connections

var ioHandler = (socket)=>{
  let io = socket.nsp.server.nsps['/'];
  console.log("Connected")
  socket.on('joinGame',(msg)=>{
    console.log(msg)
  });

  socket.on('createRoom',(msg)=>{
    // TV
  })

  socket.on('test',(msg)=>{
    console.log("testing")
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

  socket.on('disconnect',()=>{
  })

  socket.on('disconnect',()=>{

  })
}

var gameHandler1 = (socket)=>{
  let io = socket.nsp.server.nsps['/game1'];
  console.log("Someone Joined Game1");
  socket.on('test',()=>{ console.log("poop")});

  socket.on('getRoomCode',()=>{
    console.log('Getting Game Code')
    let roomCode = gameManager.getUniqueCode();
    gameManager.addNewRoom(roomCode,'game1')
    socket.emit("getRoomCode",{ "roomCode" : gameManager.getUniqueCode() })
  })



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
