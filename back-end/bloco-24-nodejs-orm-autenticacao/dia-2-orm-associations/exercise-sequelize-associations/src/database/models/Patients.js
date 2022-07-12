module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: DataTypes.STRING,
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Patients',
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plan' });
  };

  return Patients;
};