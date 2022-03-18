const { getUserData } = require("../services/auth.service");
const authUser = require("../models/auth");
class AuthControllers {
  // [POST]/login
  login = async (req, res) => {
    try {
      const accessToken = req.headers.authorization.split(" ")[1];
      const userData = await getUserData(accessToken);
      const oldUser = await authUser.findOne({ email: userData.email });
      if (!oldUser) {
        const user = new authUser({
          given_name: userData.given_name,
          nickname: userData.nickname,
          name: userData.name,
          picture: userData.picture,
          email: userData.email,
        });
        await user.save();

        return res.json(user);
      } else {
        return res.json(oldUser);
      }
    } catch (error) {
        return error
    }
  };
}

module.exports = new AuthControllers();
