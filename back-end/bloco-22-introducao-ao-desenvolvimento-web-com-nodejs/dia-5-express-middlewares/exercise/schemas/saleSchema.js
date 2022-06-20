const Joi = require('joi').extend(require('@joi/date'));

module.exports = Joi.object({
  productName: Joi.string()
    .required()
    .min(4)
    .messages({
      'any.required': '400|O campo productName é obrigatório',
      'string.min': '400|O campo productName deve ter pelo menos 4 caracteres',
    }),
  infos: Joi.object({
      saleDate: Joi.date()
      .format('DD/MM/YYYY')
      .required()
      .messages({
        'any.required': '400|O campo saleDate é obrigatório',
        'date.format': '400|O campo saleDate não é uma data válida',
      }),
      warrantyPeriod: Joi.number()
      .max(3)
      .integer()
      .positive()
      .strict()
      .required()
      .messages({
        'any.required': '400|O campo warrantyPeriod é obrigatório',
        'number.positive': '400|O campo warrantyPeriod precisa estar entre 1 e 3',
        'number.max': '400|O campo warrantyPeriod precisa estar entre 1 e 3',
        'number.base': '400|O campo warrantyPeriod precisa estar entre 1 e 3',
      }),
    })
    .required()
    .messages({
      'any.required': '400|O campo infos é obrigatório',
    }),
});
