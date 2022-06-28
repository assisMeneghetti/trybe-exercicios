const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const productController = require('./controllers/productController');
const middlewares = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());
app.use(morgan('common'));

app.use('/products', productController);

app.all('*', middlewares.routeNotFound);

app.use(middlewares.handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});