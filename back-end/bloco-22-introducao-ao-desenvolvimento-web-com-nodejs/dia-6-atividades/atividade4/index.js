const express = require('express');
const app = express();
const middlewares = require('./middlewares');
const routes = require('./routes/teamRoute');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/', routes.teamRoute);

app.all('*', middlewares.notFound);

app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});