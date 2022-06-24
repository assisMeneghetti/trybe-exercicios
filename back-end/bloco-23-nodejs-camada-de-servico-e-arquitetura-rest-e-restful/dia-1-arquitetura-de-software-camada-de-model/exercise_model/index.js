const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const middlewares = require('./middlewares');
const routes = require('./routers');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/', routes.userRoute);

app.all('*', middlewares.routeNotFound);

app.use(middlewares.handleError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));