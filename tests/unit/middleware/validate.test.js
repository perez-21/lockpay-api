const Joi = require("joi");
const httpMocks = require("node-mocks-http");
const validate = require("../../../middleware/validate");
const BadRequestError = require("../../../shared/errors/BadRequestError");

describe("Validation middleware", () => {
  describe("validate", () => {
    test("should call next with BadRequestError when validation fails", () => {
      const next = jest.fn();
      const req = httpMocks.createRequest({
        body: {
          name: 123,
        },
      });
      const res = httpMocks.createResponse();
      const schema = {
        body: Joi.object({
          name: Joi.string().required(),
        }),
      };

      validate(schema)(req, res, next);

      expect(next).toHaveBeenCalledTimes(1);
      expect(next.mock.calls[0][0]).toBeInstanceOf(BadRequestError);
      expect(next.mock.calls[0][0].message).toContain("name");
    });

    test("should assign validated values to req and call next when validation passes", () => {
      const next = jest.fn();
      const req = httpMocks.createRequest({
        body: {
          name: "Ada",
        },
      });
      const res = httpMocks.createResponse();
      const schema = {
        body: Joi.object({
          name: Joi.string().required(),
        }),
      };

      validate(schema)(req, res, next);

      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledWith();
      expect(req.body).toEqual({ name: "Ada" });
    });
  });
});
