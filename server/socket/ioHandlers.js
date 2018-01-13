// File where the fuctions passed into the handler are found

var gameHandler1 = (socket)=>{
  console.log("Someone Joined Game1")
  socket.on("test",()=>{ console.log("poop")})
}

var gameHandler2 = (socket)=>{
  console.log("Someone Joined Game1")
}

var gameHandler3 = (socket)=>{
  console.log("Someone Joined Game1")
}
module.exports = { gameHandler1 , gameHandler2, gameHandler3 };
// module.exports = gameHandler2;
// module.exports = gameHandler3;
