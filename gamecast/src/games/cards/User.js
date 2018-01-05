
class Card {
  constructor(index,label) {
    this.label = label;
    this.index = index;
  }
}

class Deck {
  constructor() {
    this.blackCards = [];
    this.whiteCardsEarned = [];
    this.whiteCard = "White";
    this.currentBlackCard = "Black";
    this.ind = 0;
    this.cardsRecived = [];
  }

  insertCard(card){
    this.blackCards.push(card);
  }

  //=======================================================
  //=== Deck and Card Classes =============================

  getNextCard(){
    this.currentBlackCard = this.blackCards[this.nextCardIndex()].label;
  }

  getPreviousCard(){
    this.currentBlackCard = this.blackCards[this.previousCardIndex()].label;
  }

  nextCardIndex() {
    if (this.ind === 6) {
      this.ind = 0;
      return this.ind;
    } else {
      this.ind++
      return this.ind;
    }
  }

  previousCardIndex() {
    if (this.ind === 0) {
      this.ind = 6;
      return this.ind;
    } else {
      this.ind--
      return this.ind;
    }
  }

  fillHand(ar){
    for (var i = 0; i < ar.length; i++) {
      var x = new Card(i, ar[i]); // get a black card
      this.insertCard(x);
    }
    this.currentBlackCard = this.blackCards[0].label;
  }
}

export default class User {
  constructor(socket){
    this.id = socket.id;
    this.userName = "Jeff";
    this.deck = new Deck();
    this.cardsEarned = 0;
    this.whiteCards = 0;
    this.isPickingCards = false;
    this.socket = socket;
    this.roomCode = "";
    this.cardsRecived = [];
    this.setUpSocketListners();
    this.initGame();
  }

  // At begining of game

  joinGame(roomCode){
    this.socket.emit('joinGame', { userName : this.userName, roomCode : roomCode })
  }

  startNewGame(){
    console.log("starting new game")
    this.socket.emit("startNewGame", { userName : this.userName })
  }

  initGame(){
    this.socket.emit("getDeck");
    this.socket.emit("getWhiteCard");
  }

  setUpSocketListners(){

    this.socket.on("newBlackCard",(msg)=>{
      console.log(msg)
      this.deck.blackCards[this.deck.ind].label = msg;
      this.deck.currentBlackCard = this.deck.blackCards[this.deck.ind].label;
    });

    // this.socket.on("userRecievedCard", msg =>{
    //   this.cardRecived(msg);
    // })

    this.socket.on("userSentCard", msg =>{
      console.log(`Recived Card ${ msg.card } form ${ msg.userName } with SocketID = ${ msg.roomCode }`);
      // add card to cardsRecived

      // Show cards on the thing
    })

    this.socket.on("whoseTurnIsIt", msg =>{
      this.user.turn = (this.user.userName === msg )?("my"):(msg);
    })

    this.socket.on('newRoomCode', msg =>{
      this.roomCode = msg.roomCode;
    })

    this.socket.on("err",(msg)=>{
      console.log(msg)
    })
  }

  // during game;

  sendCardToPlayer(){
    this.socket.emit('submitCard',{ card : this.deck.currentBlackCard , roomCode : this.roomCode , userName : this.userName });
  }

  getBlackCard(){
    this.socket.emit('getBlackCard');
  }

  sendChoosenCard(card){
    // card will have user and socket info;
    this.socket.emit('winningCardChosen', { cardChosen : card })
  }

}
