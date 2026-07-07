const jwt = require("jsonwebtoken");
const ApiError = require("../shared/errors/ApiError");
const config = require("../shared/config");

const generateToken = (userId, expires) => {
  const payload = {
    sub: userId,
  }

  return jwt.sign(payload, config.JWT_SECRET, {expiresIn: expires});
}

module.exports = {generateToken};