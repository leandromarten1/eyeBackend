module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      preco_total: DataTypes.INTEGER,
      endereco: DataTypes.STRING,
      forma_pagamento: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  Sales.associate = (models) => {
    Sales.belongsToMany(models.Product, {
      through: models.SalesProducts,
      foreignKey: 'sale_id',
    });

    Sales.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return Sales;
};
