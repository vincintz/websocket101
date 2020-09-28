module.exports = (app) => {
  app.io.on('connection', socket => {
    console.log("user connected");

    socket.on("disconnect", function() {
      console.log("user disconnected");
    });

    socket.on('exec', (action) => {
      console.log('exec: ', action);
    });

    socket.on("message", message => {
      console.log("Message Received: " + message);
      app.io.emit("message", { type: "new-message", text: message });
    });

  });
}
