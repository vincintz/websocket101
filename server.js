const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const config = require('./server/config');

const app = express();
const server = http.createServer(app);
app.io = socketio(server);

// Serve generated static site
config.serve_webui && app.use(express.static('public'));

require('./server/routes')(app)
require('./server/sockets')(app)

// Start listening on confugred port
server.listen(config.port, () => {
  console.log(`Server running on: http://127.0.0.1:${config.port}`)
});
