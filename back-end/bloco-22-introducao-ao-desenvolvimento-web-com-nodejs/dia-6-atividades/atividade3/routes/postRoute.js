const express = require('express');
const postRoute = express.Router();
const services = require('../services');

postRoute.get('/posts/:id', services.getById);
postRoute.get('/posts', services.getAll);
postRoute.get('/posts3', services.getAll);

module.exports = { postRoute };