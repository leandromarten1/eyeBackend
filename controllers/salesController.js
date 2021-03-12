const router = require('express').Router();
const { Sales, SalesProducts } = require('../models');
const auth = require('../middlewares/auth');

router.get('/', auth, async (_req, res) => {
  try {
    const sales = await Sales.findAll();
    if (sales.length < 1) {
      return res.status(200).json({ message: 'Nenhuma venda feita.' });
    }
    return res.status(200).json(sales);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.post('/', auth, async (req, res) => {
  const { address, state, city, payment, products } = req.body;
  const { id } = req.user;
  const totalPrice = products.reduce(
    (acc, { preco, quantity }) => acc + preco * quantity,
    0,
  );
  const endereco = `${address}, ${city}, ${state}`;
  const sale = await Sales.create({
    user_id: id,
    preco_total: totalPrice,
    endereco,
    forma_pagamento: payment,
  });

  products.forEach(async (productCart) => {
    const { id: productId, quantity } = productCart;
    await SalesProducts.create({
      sale_id: sale.id,
      product_id: productId,
      quantity,
    });
  });
});

router.put('/', async (req, res) => {});
router.delete('/', async (req, res) => {});

module.exports = router;
