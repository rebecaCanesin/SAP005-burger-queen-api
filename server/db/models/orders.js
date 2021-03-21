const { DataTypes } = require ("sequelize");
const sequelize = require ('../config/sequelize');
const products = require("./products");


const orders = sequelize.define("orders",{
    client_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    products: [(products)],
});

const init = async ()=>{
    await orders.sync();
};

init();

module.exports = orders;
