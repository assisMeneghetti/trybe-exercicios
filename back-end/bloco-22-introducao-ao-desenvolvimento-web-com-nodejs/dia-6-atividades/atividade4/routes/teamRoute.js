const express = require('express');
const teamRoute = express.Router();
const services = require('../services');
const middlewares = require('../middlewares');

const validations = [middlewares.isNameValid, middlewares.isInitialsValid, middlewares.isCountryValid];

teamRoute.post('/teams', validations, services.create);
teamRoute.get('/teams', services.getAll);

module.exports = { teamRoute };