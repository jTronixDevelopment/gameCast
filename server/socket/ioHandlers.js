// File where the fuctions passed into the handler are found
let validator = require('./helper.js'); // validates inputs
// This function will handle initial connections
var ioHandler = (socket)=>{
  console.log("Connection Made")

  socket.on('joinGame',(msg)=>{
    validator(msg,'roomCode',(msg)=>{
      console.log("Workings");
    })
  })

  socket.on('test',()=>{
    console.lg
    socket.emit("test",{"msg":'Workin'})
  })
  // Logic for starting room

  socket.on('startGame',()=>{
    console.log(msg);
  })

}

var gameHandler1 = (socket)=>{
  console.log("Someone Joined Game1")
  socket.on("test",()=>{ console.log("poop")})
}

var gameHandler2 = (socket)=>{
  console.log("Someone Joined Game2")
}

var gameHandler3 = (socket)=>{
  console.log("Someone Joined Game3")
}

module.exports = { gameHandler1 , gameHandler2, gameHandler3 , ioHandler };
