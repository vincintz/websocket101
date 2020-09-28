const express = require('express');
const teamApi = require('./api/teams');
const commandApi = require('./api/commands');

module.exports = app => {
  app.use(express.json());
  app.use('/api/teams', teamApi);
  app.use('/api/commands', commandApi);
}
