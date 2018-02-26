// This will be to manange all games and all rooms
let codeGenerator = require("randomstring");

var rooms={};
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
    for(var i =0; i<rooms.length;i++)
      console.log(this.rooms[i]);

    this.codeGenerator = codeGenerator;
    rooms
  }

  getUniqueCode(){
    return this.codeGenerator({
      charset : 'abcdefghijklmnopqrstuvwxyz',
      length : 5
    });
  }

  addNewRoom(room){

  }

  deleteRoom(room){

  }

  hasRoom(room){

  }

}

module.exports = new GameManager(codeGenerator);
