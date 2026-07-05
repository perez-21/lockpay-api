const Joi = require("joi");
const BadRequestError = require("../shared/errors/BadRequestError");

const validate = (schema) => (req, res, next) => {
  const paramsSchema = schema.params || Joi.object();
  const querySchema = schema.query || Joi.object();
  const bodySchema = schema.body || Joi.object();
  const { params, query, body } = req;

  const { value, error } = Joi.compile({
    params: paramsSchema,
    query: querySchema,
    body: bodySchema,
  })
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate({ params, query, body });

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new BadRequestError(errorMessage));
  }

  Object.assign(req, { params, query, body });
  return next();
};

module.exports = validate;
