const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/database/models/Book');

describe('O model de User', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades "title", "author" e "pageQuantity"', () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});