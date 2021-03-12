module.exports = (sequelize, DataTypes) => {
    const salesProducts = sequelize.define(
      'SalesProducts',
      {
        quantity: DataTypes.STRING,
      },
      { timestamps: false },
    );
  
    return salesProducts;
  };
  