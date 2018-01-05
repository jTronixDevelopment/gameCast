var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(4000, () => console.log('listening on *:4200'));

//==============================================================================
//==== Server Stuff ============================================================
//==============================================================================

app.use(require('express').static('public'));

app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile('index.html');
});

app.get('/test', function(req, res) {
  console.log(__dirname + 'public/index.html')
});

//==============================================================================
//==== Cards Stuff =============================================================
//==============================================================================

var gameHandler = require('./backend/gameHandler.js');
var decks = require('./backend/serverSideCard.js');
var currentWhiteCard = decks.whiteCardDeck.getCardFromDeck();

//==============================================================================
//==== Socket Stuff ============================================================
//==============================================================================

io.on('connection', function(socket) {
  //============================================================================
  //==== Starting/Joining Game =================================================
  //============================================================================

  socket.on('joinGame', msg => {
    console.log("JOINING GAME WITH ROOM CODE ", msg)
    if (gameHandler.roomCodeExists(msg.roomCode.toUpperCase())) {
      gameHandler.nameSpaces[msg.roomCode.toUpperCase()].game.addUser({
        userName: msg.userName,
        socket: socket.id
      });
    } else {
      socket.emit("err", "room Code doesn't Exists"); // This does this
    }
    console.log(msg)
    console.log(gameHandler)
  })

  socket.on('startNewGame', msg => {
    console.log("STARTING NEW GAME")
    var ns = gameHandler.getNewRoomCode();
    gameHandler.addRoom(ns);
    gameHandler.nameSpaces[ns].game.isPicking = {
      userName: msg.userName,
      socket: socket.id
    };
    gameHandler.nameSpaces[ns].game.addUser({
      userName: msg.userName,
      socket: socket.id
    });
    console.log('EMITING NEW ROOM');
    socket.emit('newRoomCode', {
      roomCode: ns
    });
    console.log(gameHandler)
  })

  socket.on('addUserName', msg => {
    console.log("ADDING USER NAME")
    if (gameHandler.users.length === 0) {
      gameHandler.gameisPicking = {
        userName: msg,
        socket: socket.id
      };
      socket.emit('youArePicking');
    }
    gameHandler.gameaddUser({
      userName: msg,
      socket: socket.id
    });
    socket.emit("whoseTurnIsIt", gameHandler.gameisPicking.userName);
  });

  socket.on('getDeck', msg => {
    console.log("getting Deck")
    var x =  Array.from(Array(7)).map(()=>{ return decks.blackCardDeck.getCardFromDeck() });
    socket.emit("newDeck", x);
  });

  socket.emit('newWhiteCard', currentWhiteCard);

  //============================================================================
  //==== Game In progress Game =================================================
  //============================================================================

  socket.on('startGame', (msg) => {
    console.log("STARTING GAME")
    var isPicking = gameHandler.nameSpaces[msg.roomCode].game.isPicking.socket;
    socket.to(isPicking).emit('isPicking')
    socket.emit('gameHasStarted');
    socket.broadcast.emit('gameHasStarted');
  })

  socket.on("submitCard", (msg) => {
    console.log('Submit Card: Passed By User',msg)
    gameHandler.nameSpaces[msg.roomCode].game.addCardToTable(msg.card);
    socket.to(gameHandler.nameSpaces[msg.roomCode].game.isPicking.socket).emit("userSentCard", msg);
  })

  socket.on('getBlackCard', (msg) => {
    socket.emit('newBlackCard', decks.blackCardDeck.getCardFromDeck())
  });

  socket.on('getWhiteCard', () => socket.emit('newWhiteCard', currentWhiteCard));

  socket.on('pickedCard',(msg)=>{
    socket.broadcast.emit('cardPicked',msg);
  })

  //============================================================================
  //==== Testing ===============================================================
  //============================================================================

  socket.on("test", msg => console.log(msg));

  //============================================================================
  //==== Game Ended ============================================================
  //============================================================================

  socket.on('disconnect', () => {
    console.log('user disconnected');
    //remove user from room/nameSpaces
  });

  socket.on('getGameCode', id => socket.emit('game', gameHandler.getRoomCodeById(id)));

});
