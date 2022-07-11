const { DataTypes } = require('sequelize');

const columns = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
      },
      email: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    };

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('users', columns);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};