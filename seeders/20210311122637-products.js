module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          nome: 'Coca-cola',
          preco: 4.50,
        },
        {
          nome: 'Misto Quente',
          preco: 8,
        },
        {
          nome: 'Coxinha',
          preco: 6,
        },
        {
          nome: 'Café',
          preco: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
