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
    // No caso dos relacionamentos 1:N, não há grande diferença na maneira como criamos as associações. Caso cada employee possuísse vários address, bastaria declarar seu model da seguinte forma:
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
    // Relacionamento 1:1
    // A função Employee.associate = (models) => {} que criamos é onde declararemos as associações daquele model. No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id, o model Employee deve chamá-la de addresses (note a letra minúscula), como definido na propriedade as.
    // Employee.hasOne(models.Address,
    //   { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};