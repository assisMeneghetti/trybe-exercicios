const { Router } = require('express');
const express = require('express');

const app = express();

const cepRoute = Router();

app.use(express.json());

// cepRoute.get('/user', controllers.getAllUsers);

module.exports = cepRoute;