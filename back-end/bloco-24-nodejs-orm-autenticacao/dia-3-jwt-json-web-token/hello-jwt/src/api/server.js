require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const { PORT } = process.env;

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = express.Router();

apiRoutes.get('/ping', routes.ping);
apiRoutes.post('/login', routes.login);
apiRoutes.get('/users/me', routes.auth, routes.me);
apiRoutes.get('/top-secret',
  /* Middleware que valida o JWT e cria `req.user` */
  routes.auth,
  /* Middleware que verifica se a pessoa autenticada é admin */
  routes.admin,
  /* Controller do endpoint */
  routes.topSecret);
apiRoutes.post('/signup', routes.signup);

app.use(apiRoutes);

app.use(routes.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
