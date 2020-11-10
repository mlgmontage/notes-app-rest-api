const Joi = require("joi");

const schema = Joi.object({
  UserId: Joi.required(),
  Note: Joi.string().min(3).required(),
});

module.exports = schema;
