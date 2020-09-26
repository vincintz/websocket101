const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static('public'));
server = app.listen(config.port, () => {
  console.log(`Server running on: http://127.0.0.1:${config.port}`)
});
