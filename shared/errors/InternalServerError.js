const ApiError = require("./ApiError");
const logger = require("../logger");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class InternalServerError extends ApiError {
  constructor(message) {
    super(message || ReasonPhrases.InternalServerError, StatusCodes.INTERNAL_SERVER_ERROR, null);
    logger.error(this.message, this.cause, this.stack);
  }
}

module.exports = InternalServerError;
