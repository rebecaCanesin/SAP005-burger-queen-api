'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id'
      }),
      Orders.hasOne(models.ProductsOrders, {
        foreignKey: 'orders_id'
      })
    }
  };
  Orders.init({
    client_name: DataTypes.STRING,
    table: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};