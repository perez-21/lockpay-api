const { StatusCodes } = require('http-status-codes');
const httpMocks = require('node-mocks-http');
const errorHandler = require('../../../middleware/error-handler');
const ApiError = require('../../../shared/errors/ApiError');
const InternalServerError = require('../../../shared/errors/InternalServerError');
const config = require('../../../shared/config');
const logger = require('../../../shared/logger');

describe('Error middleware', () => {

  describe('Error handler', () => {
    beforeEach(() => {
      jest.spyOn(logger, 'error').mockImplementation(() => {});
    });

    test('should send InternalServerError if not in debug mode and error is not of type ApiError', () => {
      config.DEBUG_MODE = false;
      const message = 'Any error'
      const error = new Error(message);
      const res = httpMocks.createResponse();
      const sendSpy = jest.spyOn(res, 'send');

      errorHandler(error, httpMocks.createRequest(), res);

      expect(sendSpy).toHaveBeenCalledWith(
        expect.objectContaining({error: {
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
          message,
        }})
      );
      config.DEBUG_MODE = process.env.DEBUG_MODE;
    });

    test('should preserve original error status and message if not in debug mode and error is instance of ApiError', () => {
      config.DEBUG_MODE = false;
      const error = new ApiError('Any error', StatusCodes.BAD_REQUEST,);
      const res = httpMocks.createResponse();
      const sendSpy = jest.spyOn(res, 'send');

      errorHandler(error, httpMocks.createRequest(), res);

      expect(sendSpy).toHaveBeenCalledWith(
        expect.objectContaining({ error: {
          statusCode: error.statusCode,
          message: error.message,
          code: error.code
        }})
      );
      config.DEBUG_MODE = process.env.DEBUG_MODE;
    });
  });
});
