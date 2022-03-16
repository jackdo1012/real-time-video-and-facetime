
import { AuthenticationClient } from "auth0"
const dotenv = require("dotenv")
dotenv.config()
export const auth0 = new AuthenticationClient({
    domain: process.env.ISSUERBASEURL,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.SECRET
})

