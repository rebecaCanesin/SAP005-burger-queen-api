const { DataTypes } = require ("sequelize");
const sequelize = require ('../config/sequelize');


const users = sequelize.define("users",{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING,
});

const init = async ()=>{
    await users.sync();
};

init();

module.exports = users;

