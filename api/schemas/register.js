const Joi = require("joi");

const scheme = Joi.object({
  Login: Joi.string().required(),
  Password: Joi.string().required(),
  Name: Joi.string().required(),
  Lastname: Joi.string().required(),
});

module.exports = scheme;
