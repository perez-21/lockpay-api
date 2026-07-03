const { StatusCodes } = require("http-status-codes");
const ApiError = require("../../shared/errors/ApiError");
const EntityNotFoundError = require("../../shared/errors/EntityNotFoundError");
const InternalServerError = require("../../shared/errors/InternalServerError");

describe("API Errors", () => {
  describe("ApiError", () => {
    test("expect ApiError to be instance of Error", () => {
      expect(new ApiError() instanceof Error).toBe(true);
    });
    test("expect ApiError to have defined message and statusCode properties", () => {
      const error = new ApiError();
      expect(error.message).toBeDefined();
      expect(error.statusCode).toBeDefined();
    });
  });

  describe("EntityNotFoundError", () => {
    test("expect EntityNotFoundError to be instance of ApiError", () => {
      expect(new EntityNotFoundError() instanceof ApiError).toBe(true);
    });
    test("expect EntityNotfoundError to have defined message and statusCode properties", () => {
      const error = new EntityNotFoundError();
      expect(error.message).toBeDefined();
      expect(error.statusCode).toBeDefined();
    });

    test("expect EntityNotfoundError status code to match Not Found", () => {
      const error = new EntityNotFoundError();
      expect(error.statusCode).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe("InternalServerError", () => {
    test("expect InternalServerError to be instance of ApiError", () => {
      expect(new InternalServerError() instanceof ApiError).toBe(true);
    });
    test("expect InternalServerError to have defined message and statusCode properties", () => {
      const error = new InternalServerError();
      expect(error.message).toBeDefined();
      expect(error.statusCode).toBeDefined();
    });

    test("expect InternalServerError status code to match Not Found", () => {
      const error = new InternalServerError();
      expect(error.statusCode).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    });
  });
});
