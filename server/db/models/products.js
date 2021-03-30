'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.hasMany(models.ProductsOrders, {
        foreignKey: 'product_id'
      })
    }
  };
  Products.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    price: DataTypes.FLOAT,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};