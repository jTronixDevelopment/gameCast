// const express = require('express');
// const socketIO = require('socket.io');
// const path = require('path');
//
// const PORT = process.env.PORT || 3000;
// const INDEX = path.resolve(__dirname, '..', 'build', 'index.html')
//
// const app = express();
// // app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
//
// // Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));
//
// // Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));
//
// const io = socketIO(app);
//
// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });
//
// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
//
//

const express = require('express');
var app = express();
const path = require('path');

var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(process.env.PORT || 5000);

console.log(__dirname)
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));

io.on('connection', function (socket) {
  console.log("connection")
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});










// // server/index.js
// 'use strict';
// const app = require('./app');
// const PORT = process.env.PORT || 9000;
// require('./socket/socketServer.js'); // Start Socket Server
//
// app.listen(PORT, () => console.log(`App listening on port ${PORT}!`) );
