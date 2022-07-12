module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBook',
    {},
    { timestamps: false });

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};

// ModelDeAssociação.associate = (models) => {
//   models.ModelFonte.belongsToMany(models.ModelAlvo, {
//     as: 'apelido_da_associação',
//     through: ModelDeAssociação,
//     foreignKey: 'id_da_fonte_na_tabela_da_associação',
//     otherKey: 'id_do_alvo_na_tabela_da_associação',
//   });