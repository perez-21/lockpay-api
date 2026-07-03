const config = require("../shared/config");
const ApiError = require("../shared/errors/ApiError");
const InternalServerError = require("../shared/errors/InternalServerError");
const { getErrorMessage } = require("../shared/utils");

const errorHandler = (error, req, res, next) => {
  if (res.headersSent || config.DEBUG_MODE) {
    next(error);
    return;
  }

  if (error instanceof ApiError) {
    error.sendError(res);
    return;
  }

  new InternalServerError(getErrorMessage(error) || "An error occured. Please view logs for more details").sendError(res);
}

module.exports = errorHandler;