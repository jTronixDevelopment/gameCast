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

//Steps
// Parse
// Valid Object
// route to corret area
// valid for area
// Send


// all keys exist for basic message
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

// route users to the correct end point
function socketRouter(msgObject){
  // This function will route req to the appropriate handler
  // check if object exsist and if play is okay to do so and room exisits
  if (isValidMessage(msgObject)&&gameManager.isValidPlayer(msgObject)&&gameManager.isValidRoomCode(msgObject)) {
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
  console.log("MSG for Server :", msgObject);
  switch (msgObject.action) {
    case "test":
      // do something
      break;
    default:

  }
}

function clientSocketHandler(msgObject){
  console.log("MSG for client", msgObject);
  switch (msgObject.action) {
    case 'test':
      // do something
      break;
    default:

  }
}

function tvSocketHandler(msgObject){
  console.log("MSG for TV", msgObject);
  switch (msgObject.action) {
    case "test":
      // do something
      break;
    default:

  }
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
