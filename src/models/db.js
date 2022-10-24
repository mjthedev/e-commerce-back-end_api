const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('e-commerce', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;