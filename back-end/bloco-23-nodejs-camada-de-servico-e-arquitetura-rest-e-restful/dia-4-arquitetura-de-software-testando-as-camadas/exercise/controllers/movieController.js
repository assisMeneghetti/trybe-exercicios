// const Joi = require('joi');
// const { serialize } = require('../models/movieModel');
const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  // const { error } = Joi.object({
  //   title: Joi.string().not().empty().required(),
  //   releaseYear: Joi.number().not().empty().required(),
  //   directedBy: Joi.string().not().empty().required(),
  // })
  //   .validate(serialize(req.body));

  // if (error) return next(error);

  const movie = await MoviesService
    .create(req.body);

  console.log(movie);

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
  }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

module.exports = {
  create,
};