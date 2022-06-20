const Joi = require('joi');
const message = '400|invalid data'

module.exports = Joi.object({
  username: Joi.string()
    .required()
    .min(3)
    .messages({
      'any.required': message,
      'string.min': message,
    }),
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
