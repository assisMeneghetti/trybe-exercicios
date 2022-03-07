const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.NUMBER,
    createdAt: DataTypes.DATE
  }, {
    updatedAt: false,
  });

  return Book;
};

module.exports = Book;