module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      nome: DataTypes.STRING,
      preco: DataTypes.DECIMAL(4, 2),
      imagem: {
        type: DataTypes.STRING,
        defaultValue: 'http://localhost:3001/images/no-image-found.gif',
      },
    },
    { timestamps: false },
  );

  Product.associate = (models) => {
    Product.belongsToMany(models.Sales, {
      through: models.SalesProducts,
      foreignKey: 'product_id',
    });
  };

  return Product;
};
