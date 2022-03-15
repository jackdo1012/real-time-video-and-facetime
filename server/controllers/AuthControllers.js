
class AuthControllers {
    // [POST]/login
    login = (req, res) => {
        console.log(req.oidc.isAuthenticated())
        res.json("test auth successfully")
    }
}

module.exports = new AuthControllers()