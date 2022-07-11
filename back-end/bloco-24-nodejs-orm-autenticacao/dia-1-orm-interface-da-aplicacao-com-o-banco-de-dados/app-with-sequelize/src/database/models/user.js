module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'users',
  });

  return User;
};
