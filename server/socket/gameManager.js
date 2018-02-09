// This will be to manange all games and all rooms
let codeGenerator = require("randomstring");
let Game1 = require('./games/game1');
let Game2 = require('./games/game2');

class GameManager{
  constructor(codeGenerator){
    this.rooms = {
      'xxxxx' : {
        users : [],
        gameType : "game1",
        gameInstance : {}
      },
      'aaaaaa' : {
        users : [],
        gameType : "game2",
        gameInstance : {}
      }
     };
    this.codeGenerator = codeGenerator;
  }

  getUniqueCode(){
    return this.codeGenerator({
      charset : 'abcdefghijklmnopqrstuvwxyz',
      length : 5
    });
  }

  addNewRoom(gameObj){

  }

  deleteRoom(roomCode){

  }

  onJoinGame(roomCode){

  }

}

module.exports = new GameManager(codeGenerator);
