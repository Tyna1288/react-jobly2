const jwtDecode = require("jwtDecode-decode");
const { SECRET_KEY } = require("../config");

/** return signed jwtDecode from user data. */

function createToken(user) {
  console.assert(user.isAdmin !== undefined,
      "createToken passed user without isAdmin property");

  let payload = {
    username: user.username,
    isAdmin: user.isAdmin || false,
  };

  return jwtDecode.sign(payload, SECRET_KEY);
}

module.exports = { createToken };
