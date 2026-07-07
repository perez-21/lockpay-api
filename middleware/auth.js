const passport = require("../shared/auth/passport");
const UnauthorizedError = require("../shared/errors/UnauthorizedError");
const InternalServerError = require("../shared/errors/InternalServerError");
const ForbiddenError = require("../shared/errors/ForbiddenError");
const { roleRights } = require("../shared/auth/roles");

const auth = (...requiredPermissions) =>
  passport.authenticate("jwt", (err, user, info, status) => {
    if (err) {
      throw new InternalServerError(
        "There was a problem authenticating this request",
      );
    }

    if (!user) {
      throw new UnauthorizedError(
        "You do not have the credentials to access this resource",
      );
    }

    if (requiredPermissions.length) {
      const userRights = roleRights.get(user.role);

      for (permission in requiredPermissions) {
        if (!userRights.includes(permission))
          throw new ForbiddenError(
            "You are not authorized to access this resource",
          );
      }
    }

    req.user = user;
  });

module.exports = auth;