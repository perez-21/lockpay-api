const Joi = require("joi");
const { roles } = require("../shared/auth/roles");
const { Role } = require("../generated/prisma/client");

const register = {
  body: Joi.object().keys(
    {
      email: Joi.string().required().email(),
      firstname: Joi.string().required().trim(),
      lastname: Joi.string().required().trim(),
      password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      role: Joi.string().uppercase().valid(...roles.filter((role) => role !== Role.ADMIN)),
    }
  )
};

const login = {
  body: Joi.object().keys(
    {
      email: Joi.string().required().email(),
      password: Joi.string().required().trim().min(8).max(64),
      role: Joi.string().uppercase().valid(...roles.filter((role) => role !== Role.ADMIN)),
    }
  )
};

module.exports = {register, login};