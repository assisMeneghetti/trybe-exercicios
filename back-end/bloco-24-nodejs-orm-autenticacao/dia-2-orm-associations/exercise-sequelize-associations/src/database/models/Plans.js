module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define('Plans', {
    planId: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'Plans',
  });

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'patients' });
  };

  return Plans;
};