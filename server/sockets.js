module.exports = (app) => {
  app.io.on('connection', socket => {
    socket.on('exec', data => {
      console.log('exec: ', data);
    });
  });
}