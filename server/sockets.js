const { spawn } = require('child_process');

module.exports = (app) => {
  app.io.on('connection', socket => {
    console.log(`Socket connected: ${socket.conn.id}`);

    socket.on("disconnect", function() {
      console.log(`Socket disconnected: ${socket.conn.id}`);
    });

    socket.on('exec', (action) => {
      let actionSplit = action.split(/\ +/);
      console.log(`exec action:  '${action}'`);
      const proc = spawn(actionSplit[0], actionSplit.slice(1));

      proc.stdout.on('data', (data) => {
        app.io.emit("message", { type: "new-message", text: data });
        console.log(`stdout: ${data}`);
      });

      proc.stderr.on('data', (data) => {
        app.io.emit("message", { type: "new-error", text: data });
        console.error(`stderr: ${data}`);
      });

      proc.on('close', (code) => {
        app.io.emit("message", { type: "close", text: code });
        console.log(`child process exited with code ${code}`);
      });

    });

    socket.on("message", message => {
      console.log(`Message received from (${socket.conn.id}): ${message}`);
      app.io.emit("message", { type: "new-message", text: message });
    });

  });
}
