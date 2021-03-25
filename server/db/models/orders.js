'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id'
      }),
      Orders.hasMany(models.ProductsOrders, {
        foreignKey: 'orders_id'
      })
    }
  };
  Orders.init({
    user_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};