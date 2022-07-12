const { Patients, Plans, Surgeries } = require('../database/models');

const noPatientsFound = 'No patients found';
const algoDeuErrado = 'Algo deu errado';

const getAllPatientsPlans = (_req, res) => (
  Patients.findAll({ include: { model: Plans, as: 'plan' } })
    .then((listOfPatients) => {
      if (!listOfPatients.length) {
        return res.status(404).send({ message: noPatientsFound });
      }
      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: algoDeuErrado }))
);

const getAllPatientsSurgeries = (_req, res) => (
  Patients.findAll({
    include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } },
  })
    .then((patients) => {
      if (!patients.length) {
        return res.status(404).send({ message: noPatientsFound });
      }
      return res.status(200).json(patients);
    })
    .catch(() => () => res.status(500).json({ message: algoDeuErrado }))
);

const createPatients = (req, res) => {
  const { fullname, planId } = req.body;
  Patients.create({ fullname, planId })
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: algoDeuErrado }));
};

const getPatientsAndSurgeriesNoDoctor = (_req, res) => (
  Patients.findAll({
    include: {
      model: Surgeries,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] },
    },
  })
    .then((listOfPatients) => {
      if (listOfPatients === null) {
        return res.status(404).send({ message: noPatientsFound });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: algoDeuErrado }))
);

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
};