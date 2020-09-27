const express = require('express');
const app = express();
const config = require('./config');
const teamApi = require('./api/teams');

app.use(express.static('public'));
app.use(express.json());
app.use('/api/teams', teamApi);

// Start listening on confugred port
server = app.listen(config.port, () => {
  console.log(`Server running on: http://127.0.0.1:${config.port}`)
});
