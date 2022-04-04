// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address, //cada employee pode possuir muitos addresses 
    // Employee.hasOne(models.Address, //cada employee pode possuir somente 1 endereço
      { foreignKey: 'employee_id', as: 'addresses' /*nome da chave q vira no retorno da minha rota*/});
  };

  return Employee;
};