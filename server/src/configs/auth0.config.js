
const { AuthenticationClient } = require('auth0')
const dotenv = require("dotenv")
dotenv.config()
exports.auth0 = new AuthenticationClient({
    domain: process.env.ISSUERBASEURL,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.SECRET
})

