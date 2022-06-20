const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
  return res.json({ message: 'pong' });
});

app.post('/hello', function (req, res) {
  const { name } = req.body;
  return res.json({ message: `Hello, ${name}!` });
});

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  if(age <= 17) return res.status(401).json({ "message": "Unauthorized" });
  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;
  return res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});