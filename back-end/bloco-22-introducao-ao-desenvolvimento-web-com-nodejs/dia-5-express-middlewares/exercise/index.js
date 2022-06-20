const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
const saleSchema = require('./schemas/saleSchema');

app.post('/sales', 
function (req, res, next) {
  const token = req.headers.authorization;
  if (!token || token.length !== 16) return res.status(401).send({ message: 'Token inválido!'});
  return next();
},
function (req, res) {
  const error = saleSchema.validate(req.body).error;
  if (error) {
    const [code, message] = error.details[0].message.split('|');
    return res.status(+code).json({ message });
  }

  return res.status(201).json({ message: 'Venda cadastrada com sucesso' });
});

app.post('/signup', function (req, res) {
  const { email, password, firstName, phone } = req.body;
  if(!email || !password || !firstName || !phone) return res.status(401).json({ message: 'missing fields' });
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
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