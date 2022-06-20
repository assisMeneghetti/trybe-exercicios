const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const { nextTick } = require('process');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async function (_req, res, next) {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const parsedData = JSON.parse(data);
    return res.status(200).json(parsedData);
  } catch (error) {
    next(error)
  }
});

app.get('/simpsons/:id', async function (req, res, next) {
  try {
    const { id } = req.params;
    const data = await fs.readFile('simpsons.json', 'utf8');
    const parsedData = JSON.parse(data);
    const simpson = parsedData.find(simpson => simpson.id === id);
    if (!simpson) return res.status(404).json({ message: 'Simpson not found' });
    return res.status(200).json(simpson);
  } catch (error) {
    next(error)
  }
});

app.post('/simpsons', async function (req, res, next) {
  try {
    const { id, name } = req.body;
    const data = await fs.readFile('simpsons.json', 'utf8');
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    const simpson = parsedData.find(simpson => +simpson.id === id);
    if (simpson) return res.status(409).json({ message: 'id already exists' });
    const newSimpson = { id: id.toString(), name };
    parsedData.push(newSimpson);
    const strinfiedData = JSON.stringify(parsedData, null, 2);
    await fs.writeFile('simpsons.json', strinfiedData);
    return res.status(204).end();
  } catch (error) {
    next(error)
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