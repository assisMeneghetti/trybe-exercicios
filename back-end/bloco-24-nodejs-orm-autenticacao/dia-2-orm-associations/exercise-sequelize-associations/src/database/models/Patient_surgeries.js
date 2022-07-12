module.exports = (sequelize, _DataTypes) => {
  const PS = sequelize.define(
      'Patient_surgeries',
      {},
      {
        timestamps: false,
        underscored: true,
        tableName: 'Patient_surgeries',
      },
    );
  PS.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients,
      { as: 'patients', through: PS, foreignKey: 'surgery_id', otherKey: 'patient_id' });
    models.Patients.belongsToMany(models.Surgeries,
      { as: 'surgeries', through: PS, foreignKey: 'patient_id', otherKey: 'surgery_id' });
  };

  return PS;
};