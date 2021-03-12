module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ProductsTable = queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      preco: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 2),
      },
      imagem: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue:
          'http://localhost:3001/images/no-image-found.gif',
      },

    });

    return ProductsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('Products'),
};
