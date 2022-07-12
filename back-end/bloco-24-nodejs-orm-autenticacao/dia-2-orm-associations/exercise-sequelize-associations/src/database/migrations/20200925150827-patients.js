const { DataTypes } = require('sequelize');

const columns = {
      patientId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'patient_id',
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      planId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Plans',
          key: 'plan_id',
        },
        onDelete: 'CASCADE',
        field: 'plan_id',
      },
    };

module.exports = {
  up: async (queryInterface) => {
    const PatientsTable = queryInterface.createTable('Patients', columns);

    return PatientsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('Patients'),
};
