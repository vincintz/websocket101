const express = require('express');
const cors = require('cors')
const teamApi = require('./api/teams');
const commandApi = require('./api/commands');

module.exports = app => {
  app.use(express.json());
  app.use(cors());
  app.use('/api/teams', teamApi);
  app.use('/api/commands', commandApi);
}
