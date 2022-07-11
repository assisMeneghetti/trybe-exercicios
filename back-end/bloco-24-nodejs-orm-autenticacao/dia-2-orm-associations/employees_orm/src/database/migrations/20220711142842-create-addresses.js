const { DataTypes } = require('sequelize');

const columns = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      number: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa a tabela da referência da associação
          model: 'Employees',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
    };

module.exports = {
  up: async (queryInterface) => queryInterface.createTable('Addresses', columns),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('Addresses'),
};