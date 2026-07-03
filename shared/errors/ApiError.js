const { StatusCodes, ReasonPhrases } = require("http-status-codes");
class ApiError extends Error {
  constructor(message, statusCode, code) {
    super();
    this.message = message || ReasonPhrases.INTERNAL_SERVER_ERROR;
    this.statusCode = statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    this.code = code || this.code;
  }

  sendError(res) {
    res.status(this.statusCode).send({
      error: {
        message: this.message,
        statusCode: this.statusCode,
        code: this.code,
      },
    });
    return;
  }
}

module.exports = ApiError;
