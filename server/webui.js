const path = require('path');
const express = require('express');

module.exports = app => {
  const rootdir = path.dirname(require.main.filename);
  const fullpath = path.join(rootdir, 'public');
  const indexpath = path.join(rootdir, 'public', 'index.html');
  app.use(express.static(fullpath));
  app.get('*', function (req, res) {
    res.sendFile(indexpath);
  });
}
