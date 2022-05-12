const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
const port = 3000;

const validations = [
  middlewares.validateEmail,
  middlewares.validateFirstName,
  middlewares.validateLastName,
  middlewares.validatePassword,
];

app.use(bodyParser.json());

// READ
app.get('/user', controllers.getAllUsers);

// CREATE
app.post('/users',
  validations,
  controllers.createUser,
);

app.use(middlewares.handleError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))