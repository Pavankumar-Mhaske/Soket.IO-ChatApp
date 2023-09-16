/**  const express = require('express');
     const app = express();
*/

// this 2 lines in single line
const app = require("express")();

/*
const { createServer } = require("http");
const httpServer = createServer();
*/
// this 2 lines in single line
const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {},
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("What is socket", socket);
  console.log("Socket is active to be connected");

  // chat event listener
  socket.on("chat", (payload) => {
    console.log("What is payload", payload);
    // emit the chat event to all the clients
    io.emit("chat", payload);
  });
});

httpServer.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
