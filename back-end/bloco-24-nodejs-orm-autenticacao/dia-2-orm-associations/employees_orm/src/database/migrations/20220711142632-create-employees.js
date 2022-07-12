const { DataTypes } = require('sequelize');

const columns = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    };

module.exports = {
  up: async (queryInterface) => queryInterface.createTable('Employees', columns),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('Employees'),
};