const authUser = require('../models/auth')

class ProfileUserControllers {
    profileUser = (req, res) => {
        console.log(JSON.stringify(req.oidc.user))
        res.json("get user successfully")
    }
}

module.exports = new ProfileUserControllers()