const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const registerSchema = require('./schemas/registerSchema');
const loginSchema = require('./schemas/loginSchema');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', function (req, res) {
  const { username, email, password } = req.body;
  const error = registerSchema.validate({ username, email, password }).error;
  if (error) {
    const [code, message] = error.details[0].message.split('|');
    return res.status(+code).send({ message });
  }
  return res.status(201).json({ message: "user created" });
});

app.post('/user/login', function (req, res) {
  const { email, password } = req.body;
  const error = loginSchema.validate({ email, password }).error;
  if (error) {
    const [code, message] = error.details[0].message.split('|');
    return res.status(+code).send({ message });
  }
  const token = crypto.randomBytes(6).toString('hex');
  return res.status(201).json({ token });
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.use(function (err, _req, res, _next) {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json(err.message);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});