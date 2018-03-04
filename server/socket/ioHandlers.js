// File where the fuctions passed into the handler are found
let helper = require('./helper.js'); // validates inputs
let xss = require('xss');
let gameManager = require('./gameManager');

var TAG = 'ioHandlers';
// This function will handle initial connections

var ioHandler = (socket)=>{
  let io = socket.nsp.server.nsps['/'];
  console.log("Connected to Main Server");

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

//==============================================================================
//=== Socket Manger logic ======================================================
//==============================================================================

// all keys exist
function isValidMessage(msgObject){
  if(msgObject){
    ["endPoint","origin","event","msg","toAll","socket","roomCode"].forEach((key)=>{
      if(!(msgObject[key] != undefined)) {
        console.log(`${key} Does not exist in object`)
        return false;
      }
    });
  } else {
    console.log("Message Object DNE");
    return false;
  }
  return true;
}

// sender has permission to send something
function isValidToAll(msgObject){
  //check for valid roomcode
  var roomCode = msgObject.roomCode;
  if(gameManager.isValideRoom(roomCode)&&gameManager.rooms[roomCode]){

  }
}

function isValidToOne(){

}

// route users to the correct end point
function socketRouter(msgObject){
  // This function will route req to the appropriate handler
  // check if object exsist
  if (isValidMessage(msgObject)) {
    switch (msgObject.endPoint) {
      case "server":
        serverSocketHandler(msgObject);
        break;
      case "client":
        clientSocketHandler(msgObject);
        break;
      case "tv":
        tvSocketHandler(msgObject);
        break;
      default:
    }
  } else {
    throw "msgObject.endPoint DNE";
    socket.emit('err','msgObject.endPoint DNE')
  }
}

function serverSocketHandler(msgObject){
  console.log("MSG for Server :", msgObject)
}

function clientSocketHandler(msgObject){
  console.log("MSG for client", msgObject)
}

function tvSocketHandler(msgObject){
  console.log("MSG for TV", msgObject)
}

//==============================================================================
//=== MemeIt ===================================================================
//==============================================================================

var gameHandler1 = (socket)=>{
  let io = socket.nsp.server.nsps['/game1'];
  console.log("Someone Joined Game1");
  socket.on('test',()=>{ console.log("poop")});

  // only for TV to execute

  socket.on('getRoomCode',()=>{
    console.log('Getting Game Code')
    let roomCode = gameManager.getUniqueCode();
    gameManager.addNewRoom(roomCode,'game1')
    socket.emit("getRoomCode",{ "roomCode" : gameManager.getUniqueCode() })
  })

  //=== Socket Manager =========================================================

  socket.on("msgRec",(msg)=>{
    socketRouter(msg);
  });

}

//==============================================================================
//=== Game 2 ===================================================================
//==============================================================================

var gameHandler2 = (socket)=>{
  let io = socket.nsp.server.nsps['/game2'];
  console.log("Someone Joined Game2");
}

//==============================================================================
//=== Game 3 ===================================================================
//==============================================================================

var gameHandler3 = (socket)=>{
  let io = socket.nsp.server.nsps['/game3'];
  console.log("Someone Joined Game3");
}

module.exports = { gameHandler1 , gameHandler2, gameHandler3 , ioHandler };
