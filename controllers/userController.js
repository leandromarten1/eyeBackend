const router = require('express').Router();
const { User } = require('../models');
const auth = require('../middlewares/auth');

router.get('/', auth, async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.post('/', auth, async (req, res) => {})
router.put('/', auth, async (req, res) => {})
router.delete('/', auth, async (req, res) => {})

module.exports = router;
