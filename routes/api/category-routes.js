const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
  const CategoryData = await Category.findAll({
    include: [{ model: Product, attributes: ['id', 'product_name'] }]
  });
  res.status(200).json(CategoryData);
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
    try {
      const categoryPk = await Category.findByPk(req.params.id, {
        include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}]
      });
  
      if (!categoryPk) {
        res.status(404).json({ message: 'No location found with this id!' });
        return;
      }
  
      res.status(200).json(categoryPk);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryPk = await Category.findByPk(req.params.id);
    if (!categoryPk) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    
    await categoryPk.update(req.body); // assuming that the request body contains the updated data
    
    const updatedCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] }]
    });
    
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteCategory) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json('The category has been deleted.');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
