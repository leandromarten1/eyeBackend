module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { timestamps: false },
  );

  User.associate = (models) => {
    User.hasMany(models.Sales, {
      foreignKey: 'id',
      as: 'user',
    });
  };

  return User;
};
