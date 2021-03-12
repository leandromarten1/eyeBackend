const router = require('express').Router();
const { Product } = require('../models');
const auth = require('../middlewares/auth');

// Get all products
router.get('/', auth, async (_req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.post('/', auth, async (req, res) => {})
router.put('/', auth, async (req, res) => {})
router.delete('/', auth, async (req, res) => {})

module.exports = router;
