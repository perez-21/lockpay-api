const { StatusCodes } = require("http-status-codes");
const authServices = require("../services/auth.service");
const ApiError = require("../shared/errors/ApiError");
const { generateToken } = require("../services/token.service");
const config = require("../shared/config");

const register = async (req, res) => {
  const { email, firstname, lastname, password, role } = req.body;
  const user = await authServices.register(
    email,
    password,
    firstname,
    lastname,
    role,
  );
  if (user instanceof ApiError) {
    throw user;
  }
  const token = generateToken(user.id, config.JWT_EXPIRES_IN);
  res.status(StatusCodes.CREATED).send({user, token});
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await authServices.loginWithEmailAndPassword(email, password);
  if (user instanceof ApiError) {
    throw user;
  }
  const token = generateToken(user.id, config.JWT_EXPIRES_IN);
  res.status(StatusCodes.OK).send({user, token});
};

module.exports = { register, login };
