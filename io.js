function init(server) {
  io = require("socket.io")(server);
  io.listen(3001);
  // Tracks
  io.on("connection", (socket) => {
    console.log(`Connected at room.io: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`Disconnected at room.io: ${socket.id}`);
    });
  });
}

module.exports = { init };
