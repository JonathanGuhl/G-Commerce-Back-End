const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!tagById) {
      res.status(404).json('No tag found with this id!');
      return;
    }

    res.status(200).json(tagById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagUpdate = await Tag.findByPk(req.params.id);
    if (!tagUpdate) {
      res.status(404).json('No tag found with this id!');
      return;
    }
    
    await tagUpdate.update(req.body); 
    
    const updatedTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteTag) {
      res.status(404).json('No tag found with this id!');
      return;
    }

    res.status(200).json('The tag has been deleted.');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
