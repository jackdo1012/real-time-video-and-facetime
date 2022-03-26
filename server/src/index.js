const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const routeLogin = require("./routers/auth");
const { Server } = require("socket.io");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
const server = http.createServer(app);
const port = 8080;
// connect to database
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connect to database is successfully");
});
// socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// authorizationAccessToken auth0
const authorizationAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.ISSUERBASEURL}/.well-known/jwks.json`,
  }),
  audience: process.env.IDENTIFIER_URL,
  issuer: `${process.env.ISSUERBASEURL}/`,
  algorithms: ["RS256"],
});

// connect socket.io and disconnect socket.io
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  // disconnect socket.io
  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  // call user
  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", {
      singal: signalData,
      form,
      name,
    });e
  });

  // answer call 
  socket.on("answerCall", () => {
    io.on(data.to).emit("answerCall", data.singals)
  })
});
// routes
app.use("/api", authorizationAccessToken, routeLogin);
server.listen(port, () => {
  console.log("server is running on port " + port);
});
