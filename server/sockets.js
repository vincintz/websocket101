module.exports = (app) => {
  app.io.on('connection', socket => {
    socket.emit("hello", {
      message: "Hello, world."
    })
    socket.on('exec', data => {
      console.log('exec: ', data);
    });
  });
}
