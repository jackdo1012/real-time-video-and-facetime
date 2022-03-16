const express = require("express");
const dotenv = require("dotenv");
const routeLogin = require("./routers/auth");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const routeProfileUser = require("./routers/profileUser");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
const port = 8080;
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connect to database is successfully");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorizationAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      "https://real-time-video-and-facetime.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://quickstarts/authorization",
  issuer: "https://real-time-video-and-facetime.us.auth0.com/",
  algorithms: ["RS256"],
});
// routes
app.use("/api", authorizationAccessToken, routeLogin);
app.use("/api", routeProfileUser);
app.listen(port, () => {
  console.log("server is running on port " + port);
});
