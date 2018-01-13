// File where the fuctions passed into the handler are found

// This function will handle initial connections
var ioHandler = (socket)=>{
  // Logic for joining room
  console.log("Connection");
  socket.on('joinGame',(msg)=>{
      if(msg === "game1"){

      } else {

      }
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
