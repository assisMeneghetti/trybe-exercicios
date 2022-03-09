// index.js
const express = require('express');
const { Address, Employee } = require('./src/models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

// eager loading
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({
//         where: { id },
//         // include: [{ model: Address, as: 'addresses' }], // exibe tudo de 'address' no retorno
//         include: [{
//           model: Address, as: 'addresses', attributes: { exclude: ['number'] }, //exclui a propriedade 'nummber' na hora de exibir os dados
//         }],
//       });

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

// lazy loading
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    } // se cair nessa condição retorna o employee e seu respectivo address

    return res.status(200).json(employee); // caso contrario só retorna o employee
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;