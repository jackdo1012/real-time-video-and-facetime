const authUser = require('../models/auth')

class ProfileUserControllers {
    profileUser = (req, res) => {
        res.json("get user successfully")
    }
}

module.exports = new ProfileUserControllers()