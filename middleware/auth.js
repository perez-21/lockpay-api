const passport = require("../shared/auth/passport");
const UnauthorizedError = require("../shared/errors/UnauthorizedError");
const InternalServerError = require("../shared/errors/InternalServerError");
const ForbiddenError = require("../shared/errors/ForbiddenError");
const { roleRights } = require("../shared/auth/roles");

const auth = (...requiredPermissions) => (req, res, next) =>
  passport.authenticate("jwt", {session: false}, (err, user, info, status) => {
    if (err) {
      return  next(InternalServerError(
        "There was a problem authenticating this request",
      ));
    }

    if (!user) {
      return next(UnauthorizedError(
        "You do not have the credentials to access this resource",
      ));
    }

    if (requiredPermissions.length) {
      const userRights = roleRights.get(user.role) || [];
      const hasAllPermissions = requiredPermissions.every((permission) => userRights.includes(permission));

      if (!hasAllPermissions) {
        return next(new ForbiddenError("You are not authorized to access this resource"));
      }
    }

    req.user = user;
  });

module.exports = auth;