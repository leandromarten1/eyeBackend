module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SalesProducts = await queryInterface.createTable('SalesProducts', {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Sales', key: 'id' },
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Products', key: 'id' },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return SalesProducts;
  },

  down: async (queryInterface, _Sequelize) =>
    queryInterface.dropTable('SalesProducts'),
};
