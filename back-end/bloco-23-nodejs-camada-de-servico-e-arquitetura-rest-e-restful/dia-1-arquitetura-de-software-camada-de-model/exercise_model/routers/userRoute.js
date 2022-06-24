const { Router } = require('express');
const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const app = express();

const userRoute = Router();

const validations = [
  middlewares.validateEmail,
  middlewares.validateFirstName,
  middlewares.validateLastName,
  middlewares.validatePassword,
];

app.use(express.json());

userRoute.get('/user', controllers.getAllUsers);
userRoute.post('/users', validations, controllers.createUser);
userRoute.get('/user/:id', controllers.getUserById);
userRoute.put('/user/:id', validations, controllers.updateUser);

module.exports = userRoute;