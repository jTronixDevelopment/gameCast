// This will be to manange all games and all rooms
let codeGenerator = require("randomstring");
let Game1 = require('./games/game1');
let Game2 = require('./games/game2');
let TAG = 'Game Manager'
class GameManager{
  constructor(codeGenerator){
    this.codeGenerator = codeGenerator;
    this.rooms = {};
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

}

module.exports = new GameManager(codeGenerator);
