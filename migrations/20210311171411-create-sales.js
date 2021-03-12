module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SalesTable = await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      preco_total: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      forma_pagamento: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return SalesTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('Sales'),
};
