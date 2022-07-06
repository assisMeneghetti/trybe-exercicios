const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const rescue = require('express-rescue');

const middlewares = require('./middlewares');
const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.use(helmet());
app.use(morgan('common'));

app.post('/movies', rescue(MovieController.create));

const PORT = process.env.PORT || 3000;

app.all('*', middlewares.routeNotFound);

app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});