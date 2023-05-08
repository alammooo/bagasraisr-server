const jwt = require("jsonwebtoken");
SECRET_KEY = "Rahasia";

function signToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { signToken, verifyToken };
