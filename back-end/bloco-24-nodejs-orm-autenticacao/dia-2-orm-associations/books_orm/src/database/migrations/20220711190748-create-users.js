const { DataTypes } = require('sequelize');

const columns = {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'user_id',
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
  up: async (queryInterface) => {
    await queryInterface.createTable('Users', columns);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};