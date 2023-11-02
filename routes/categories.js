const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // Import your Mongoose Category model

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new category
router.post('/', async (req, res) => {
  const category = new Category(req.body);
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT (Update) a category by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.json(deletedCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
