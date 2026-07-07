const ApiError = require("./ApiError");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message || ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED, null);
  }
}

module.exports = UnauthorizedError;