const {getUserData} = require('../services/auth.service')
class AuthControllers {
    // [POST]/login
    login = async(req, res) => {
        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const userData = await getUserData(accessToken)
            res.json(userData)
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AuthControllers()