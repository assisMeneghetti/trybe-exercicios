const { DataTypes } = require('sequelize');

const columns = {
      bookId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'book_id',
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'release_year',
      },
      numberPages: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'number_pages',
      },
    };

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Books', columns);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  },
};