const { DataTypes } = require ("sequelize");
const sequelize = require ('../config/sequelize');


const products = sequelize.define("products",{
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.NUMBER,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,

});

const init = async ()=>{
    await products.sync();
};

init();

module.exports = products;
