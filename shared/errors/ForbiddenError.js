const ApiError = require("./ApiError");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ForbiddenError extends ApiError {
  constructor(message) {
    super(message || ReasonPhrases.FORBIDDEN, StatusCodes.FORBIDDEN, null);
  }
}

module.exports = ForbiddenError;