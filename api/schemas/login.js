const Joi = require("joi");

const schema = Joi.object({
  Login: Joi.string().required(),
  Password: Joi.string().required(),
});

module.exports = schema;
