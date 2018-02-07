// This will be to manange all games and all rooms
let codeGenerator = require("randomstring");

class GameManager{
  constructor(codeGenerator){
    this.rooms = { testRoom : "room" };
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

module.exports = new GameManager(codeGenerator);
