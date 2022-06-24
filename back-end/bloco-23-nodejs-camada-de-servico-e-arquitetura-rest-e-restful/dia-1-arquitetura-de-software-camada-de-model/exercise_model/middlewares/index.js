const handleError = require('./handleError');
const validateEmail = require('./validateEmail');
const validateFirstName = require('./validateFirstName');
const validateLastName = require('./validateLastName');
const validatePassword = require('./validatePassword');
const routeNotFound = require('./routeNotFound');

module.exports = {
  handleError,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  routeNotFound,
};
