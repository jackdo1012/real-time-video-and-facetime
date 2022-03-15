
const express = require('express');
const { auth } = require('express-openid-connect');
const dotenv  = require('dotenv');
const routeLogin = require("../routers/auth")
const cors = require('cors')
const routeProfileUser = require("../routers/profileUser")
const mongoose = require('mongoose');
dotenv.config()
const app = express();
const port = 3000
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("connect to database is successfully")
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
// Auth0
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL
  };
app.use(auth(config));


// routes
app.use('/api',routeLogin)
app.use('/api', routeProfileUser)
app.listen(port, () => {
    console.log("server is running on port " + port)
})