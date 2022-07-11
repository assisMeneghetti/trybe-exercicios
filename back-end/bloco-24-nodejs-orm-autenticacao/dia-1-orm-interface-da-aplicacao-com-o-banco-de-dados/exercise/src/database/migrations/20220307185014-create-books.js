const { DataTypes } = require('sequelize');

const columns = { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'page_quantity',
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
    await queryInterface.createTable('Books', columns);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Books');
  },
};
