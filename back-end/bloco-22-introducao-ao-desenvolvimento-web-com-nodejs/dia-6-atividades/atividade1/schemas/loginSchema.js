const Joi = require('joi');
const message = '400|email or password is incorrect'

module.exports = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': message,
      'string.email': message,
    }),
  password: Joi.string()
    .required()
    .min(4)
    .max(8)
    .messages({
      'any.required': message,
      'string.max': message,
      'string.min': message,
    }),
});
