// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
// app.use(require('express').static('src'));
// app.get('/', function(req, res) {
//   res.sendFile("/Users/Ryan/Documents/GitHub/projectX/index.html");
//   console.log(__dirname)
// });

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));

module.exports = app;
