const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(process.env.PORT || 5000); // For production

app.use(express.static(path.resolve(__dirname, '..', 'build')));

//==============================================================================
//=== TVML =====================================================================
//==============================================================================
console.log(__dirname)
app.get('/application.js',(req, res)=>{res.sendFile(path.resolve(__dirname,'TVML/game1/application.js'))});
app.get('/Views/mainView.xml',(req, res)=>{res.sendFile(path.resolve(__dirname,'TVML/game1/Views/mainView.xml'))});
// app.get('/application.js',(req, res)=>{res.sendFile(path.resolve(__dirname,'TVML/game1/application.js'))});


app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname,'..','build','index.html')) });
//==============================================================================
//=== Socket IO ================================================================
//==============================================================================

let ioHandlers = require('./socket/ioHandlers.js');

let game1 = io.of('/game1'); // Name Space of game1
let game2 = io.of('/game2'); // Name Space of game2
let game3 = io.of('/game3'); // Name Space of game3

io.on('connection',(socket)=>{ ioHandlers.ioHandler(socket) }); // Joining Room

game1.on('connection',(socket)=>{ ioHandlers.gameHandler1(socket) })//Game 1 NSP
game2.on('connection',(socket)=>{ ioHandlers.gameHandler2(socket) })//Game 2 NSP
game3.on('connection',(socket)=>{ ioHandlers.gameHandler3(socket) })//Game 3 NSP

console.log(`Socket Server Running on ${process.env.PORT || 5000}!`);
