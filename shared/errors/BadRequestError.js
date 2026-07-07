const ApiError = require("./ApiError");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class BadRequestError extends ApiError {
  constructor(message) {
    super(message || ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST, null);
  }
}

module.exports = BadRequestError; 