const { serialize } = require('v8');
const MoviesModel = require('../models/movieModel');

const validateTitle = (title) => (title && typeof title === 'string');

const validateReleaseYear = (releaseYear) => (releaseYear && typeof releaseYear === 'number');

const validateDirectedBy = (directedBy) => (directedBy && typeof directedBy === 'string');

const isValid = (title, directedBy, releaseYear) => {
  const isValidTitle = validateTitle(title);
  const isValidReleaseYear = validateReleaseYear(releaseYear);
  const isValidDirectedBy = validateDirectedBy(directedBy);

  if (!isValidTitle || !isValidReleaseYear || !isValidDirectedBy) return false;

  return true;
};

const create = async (movieData) => {
  const { title, directedBy, releaseYear } = serialize(movieData);

  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
};