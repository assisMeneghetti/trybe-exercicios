const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const middlewares = require('./middlewares');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.all('*', middlewares.routeNotFound);

app.use(middlewares.handleError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));