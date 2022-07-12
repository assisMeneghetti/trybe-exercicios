const { DataTypes } = require('sequelize');

const columns = {
      patientId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Patients',
          key: 'patient_id',
        },
        field: 'patient_id',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgeryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Surgeries',
          key: 'surgery_id',
        },
        field: 'surgery_id',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    };

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Patient_surgeries', columns);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Patient_surgeries');
  },
};
