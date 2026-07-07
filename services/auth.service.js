const argon2 = require('argon2');
const prismaClient = require("../shared/prismaClient");
const { Role } = require("../generated/prisma/client");
const UnauthorizedError = require("../shared/errors/UnauthorizedError");
const InternalServerError = require('../shared/errors/InternalServerError');

const register = async (email, password, firstname, lastname, role) => {

  const hashedPassword = await hashPassword(password);
  const user = await prismaClient.user.create({
    data: {
      email,
      password: hashedPassword,
      firstname,
      lastname,
      role,
    },
    omit: { password: true },
  });
  if (!user) {
    return new InternalServerError("Something went wrong registering a new user");
  }
  return user;
};

const loginWithEmailAndPassword = async (email, password) => {
  const user = await prismaClient.user.findUnique({ where: { email }});

  if (!user) {
    return new UnauthorizedError("Invalid Credentials");
  }

  if (!await verifyPassword(user.password, password)) {
    return new UnauthorizedError("Invalid Credentials");
  }
  
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

const hashPassword = async (password) => {
  return await argon2.hash(password);
};

const verifyPassword = async (hash, plainPassword) => {
  return await argon2.verify(hash, plainPassword);
}

module.exports = { register, loginWithEmailAndPassword };
