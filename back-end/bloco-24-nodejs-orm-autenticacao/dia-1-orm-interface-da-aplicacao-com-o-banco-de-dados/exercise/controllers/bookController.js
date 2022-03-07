const express = require('express');
const { Book } = require('../models');
const index = require('../models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Algo deu errado" });
  }
});
// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/book/search/1?title=aqui-o-email
router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.query;
    const book = await Book.findOne({ where: { id, title }});

    if (!book) return res.status(404).json({ message: 'Book não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      {  title, author, pageQuantity },
      { where: { id } },
    );

    //console.log(updateBook); 

    if(!updateBook) return res.status(404).json({ message: 'Book não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook) // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Book excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;