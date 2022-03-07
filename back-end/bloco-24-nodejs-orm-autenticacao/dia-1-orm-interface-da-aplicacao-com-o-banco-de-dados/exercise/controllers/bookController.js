const express = require('express');
const { Book } = require('../models');
const router = express.Router();

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Algo deu errado" });
  }
});

module.exports = router;