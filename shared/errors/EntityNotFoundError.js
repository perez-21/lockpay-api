const ApiError = require("./ApiError");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class EntityNotFoundError extends ApiError {
  constructor(message) {
    super(message || ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND, null);
  }
}

module.exports = EntityNotFoundError;
