const axios = require("axios");
const auth0 = require("../configs/auth0.config");
const dotenv = require("dotenv");
dotenv.config();
exports.getUserData = async (authToken) => {
  const userData = await axios
    .get(`${process.env.ISSUERBASEURL}/userinfo`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((data) => data.data);

  return userData;
};
