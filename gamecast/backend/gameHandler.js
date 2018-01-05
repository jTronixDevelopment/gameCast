// =============================================================================
// === Game ====================================================================
// =============================================================================

class Game {
  constructor(id) {
    this.decks = [];
    this.users = [];
    this.isPicking = {};
    this.cardsOnTable = [];
    this.gameID = id;
  }
  addUser(user) {
    this.users.push(user);
    console.log('Users', this.users)
  }
  isPickingNow(user) {
    this.isPicking.userName = user.userName;
    this.isPicking.socketID = user.socketID;
  }
  addCardToTable(card) {
    this.cardsOnTable.push(card);
  }

  getNextPicker(){

  }
}

// =============================================================================
// === Game Manager ============================================================
// =============================================================================

class GameManager {
  constructor() {
    this.nameSpaces = {}
  }

  getNewRoomCode() {
    var code = Array.from(Array(5)).map(() => {
      return this.randomNumber()
    }).map(val => {
      return String.fromCharCode(parseInt(val + 97))
    }).join('').toUpperCase();

    if (this.roomCodeIsUnique(code)) {
      return code;
    } else {
      this.getNewRoomCode();
    }
    return code;
  }

  randomNumber() {
    return Math.round(Math.random() * 25);
  }

  roomCodeIsUnique(key) {
    return !(key in this.nameSpaces);
  }

  getRoomCode() {
    this.getNewRoomCode();
  }

  addRoom(roomCode) {
    this.nameSpaces[roomCode] = {
      game: new Game(roomCode),
      lastUsed: new Date().getTime()
    };
    return roomCode;
  }

  getRoomCodeById(id) {
    return this.nameSpaces[id]
  }

  roomCodeExists(roomCode) {
    return roomCode in this.nameSpaces;
  }

}

module.export = new Game()
module.exports = new GameManager();
