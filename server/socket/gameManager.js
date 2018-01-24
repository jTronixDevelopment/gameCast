// This will be to manange all games and all rooms
var codeGenerator = require("randomstring");

class GameManager{
  constructor(codeGenerator){
    this.rooms = { room1 : "room1" };
    this.codeGenerator = codeGenerator;
  }

  getUniqueCode(){
    return this.codeGenerator({
      charset : 'abcdefghijklmnopqrstuvwxyz',
      length : 5
    });
  }

  addNewRoom(){

  }

  deleteRoom(){

  }

}

let gameManager = new GameManager(codeGenerator);

module.exports = gameManager;
