const router = require('express').Router();
const { Category, Product } = require('../../models');

//`/api/categories` endpoint

// retreives all of the categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(
      {
        include: [{ model: Product }],
      });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//retreives a category by using it's id as a parameter
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(
      req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(400).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creates a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updates a category by its `id` value -- NOT WORKING
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        Where: { id: req.params.id, },
      });
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//deletes a category by using it's id as a parameter
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
