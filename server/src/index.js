const express = require("express");
const { auth } = require("express-openid-connect");
const dotenv = require("dotenv");
const routeLogin = require("./routers/auth");
const cors = require("cors");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const routeProfileUser = require("./routers/profileUser");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
const port = 3000;
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connect to database is successfully");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
};
app.use(auth(config));

const authorizationAccessToken = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksRequestsPerMinute: 5,
      jwksUri: `${process.env.ISSUERBASEURL}/.well-known/jwks.json`,
    }),
    audience: process.env.AUDIENCE_URL,
    issuer: process.env.ISSUERBASEURL,
    algorithms: ["RS256"],
  });
// routes
app.use("/api",authorizationAccessToken, routeLogin);
app.use("/api", routeProfileUser);
app.listen(port, () => {
  console.log("server is running on port " + port);
});
