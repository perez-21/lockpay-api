const jwt = require("jsonwebtoken");
const ApiError = require("../shared/errors/ApiError");
const config = require("../shared/config");

const generateToken = (userId, expires) => {
  const payload = {
    sub: userId,
    expiresIn: expires,
  }

  return jwt.sign(payload, config.JWT_SECRET);
}

module.exports = {generateToken};