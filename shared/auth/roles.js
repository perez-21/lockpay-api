const Permissions = require("./permissions");
const { Role } = require("../../generated/prisma/client");

const allRoles = {
  [Role.CLIENT]: [],
  [Role.FREELANCER]: [],
  [Role.ADMIN]: []
};

const roleRights = new Map(Object.entries(allRoles));
const roles = Object.keys(allRoles);

module.exports = {roleRights, roles};