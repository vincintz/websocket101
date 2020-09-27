const express = require('express');

const teamApi = require('./teams');
const commandApi = require('./commands');

module.exports = app => {
  app.use(express.json());
  app.use('/api/teams', teamApi);
  app.use('/api/commands', commandApi);    
}