const express = require('express');
const app = express();
const middlewares = require('./middlewares');
const routes = require('./routes/postRoute');
const PORT = process.env.PORT || 3001;

app.use('/', routes.postRoute);

app.all('*', middlewares.notFound);

app.use(middlewares.errorHandler);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});