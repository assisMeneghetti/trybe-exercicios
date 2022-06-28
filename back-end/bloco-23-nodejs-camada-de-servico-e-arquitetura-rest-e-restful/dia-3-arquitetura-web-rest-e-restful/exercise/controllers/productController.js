const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();
const notFoundMsg = 'Product not found';

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();
  console.log('products', products);
  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    res.status(404).json({ message: notFoundMsg });
  }

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if ([name, brand].includes(undefined)) {
    res.status(400).json({ message: 'Missing required fields' });
  }

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.exclude(req.params.id);

  if (!product) {
    res.status(404).json({ message: notFoundMsg });
  }
  
  res.status(204).json();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if ([name, brand].includes(undefined)) {
    res.status(400).json({ message: 'Missing required fields' });
  }

  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    res.status(404).json({ message: notFoundMsg });
  }

  await ProductModel.update(req.params.id, name, brand);

  res.status(200).json({ name, brand });
});

module.exports = router;