const {getUserData} = require('../services/auth.service')
const authUser = require('../models/auth')
class AuthControllers {
    // [POST]/login
    login = async(req, res) => {
        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const userData = await getUserData(accessToken)
            const user = new authUser({
                given_name: userData.given_name,
                nickname: userData.nickname,
                name: userData.name,
                picture: userData.picture,
                email: userData.email,
            })
            if(!user) {
                await user.save()
            }
            res.json(user)
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AuthControllers()
