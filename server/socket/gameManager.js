// This will be to manange all games and all rooms
let codeGenerator = require("randomstring");
let Game1 = require('./games/game1');
let Game2 = require('./games/game2');
let TAG = 'Game Manager'

class GameManager{
  constructor(codeGenerator){
    this.rooms = {
      'XXXXXX' : {
        users : [],
        gameType : "game1",
        gameInstance : {}
      },
      'AAAAAA' : {
        users : [],
        gameType : "game2",
        gameInstance : {}
      }
    };
    for(var i =0; i< this.rooms.length;i++)
      console.log(this.rooms[i]);

    this.codeGenerator = codeGenerator;
  }

  getUniqueCode(){
    return this.codeGenerator.generate({
      charset : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      length : 5
    });
  }

  onJoinGame(roomCode){
  }

  addNewRoom(roomCode,gameType){
    if(roomCode && gameType){
      this.rooms[roomCode] = this.getGameObj(gameType)
      console.log(this.rooms[roomCode])
    } else{
      throw `${TAG} : roomCode or gameType undefined`;
    }
  }

  deleteRoom(room){

  }

  hasRoom(room){

  }

  getGameObj(gameType){
    switch (gameType) {
      case 'game1':
        return new Game1()
      default:
        throw "Game Obj not working";

    }
  }

  isValideRoom(room){
    return this.rooms[room]?true:false;
  }

  isValidPlayer(msgObject){
    var validPlayer = false;
    gameManager.rooms[msgObject.room]['users'].forEach((user,ind)=>{
      if(user){
      }
    })
    return validPlayer;
  }


}

module.exports = new GameManager(codeGenerator);
