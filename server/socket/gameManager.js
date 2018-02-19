// This will be to manange all games and all rooms
let codeGenerator = require("randomstring");
let Game1 = require('./games/game1');
let Game2 = require('./games/game2');

class GameManager{
  constructor(codeGenerator){
    this.codeGenerator = codeGenerator;
  }

  getUniqueCode(){
    return this.codeGenerator({
      charset : 'abcdefghijklmnopqrstuvwxyz',
      length : 5
    });
  }

  onJoinGame(roomCode){

}
  addNewRoom(room){

  }

  deleteRoom(room){

  }

  hasRoom(room){

  }

}

module.exports = new GameManager(codeGenerator);
