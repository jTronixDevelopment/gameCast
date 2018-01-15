// server/index.js
'use strict';
const app = require('./app');
const PORT = process.env.PORT || 9000;
require('./socket/socketServer.js'); // Start Socket Server

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`) );
