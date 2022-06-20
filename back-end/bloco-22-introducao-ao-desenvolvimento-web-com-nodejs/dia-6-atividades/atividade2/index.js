const express = require('express');
const app = express();
const axios = require('axios');

app.get('/btc/price', async function name(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (typeof token !== 'string' || token.length !== 12) return res.status(401).send({ message: "invalid token" });
    const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
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