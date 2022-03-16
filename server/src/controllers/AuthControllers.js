
class AuthControllers {
    // [POST]/login
    login = (req, res) => {
        try {
            const accessToken = req.headers.authorization
            console.log(accessToken)
        } catch (error) {
            
        }
    }
}

module.exports = new AuthControllers()