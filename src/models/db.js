// const { Sequelize } = require('sequelize');
const {Pool} = require('pg');



// const sequelize = new Sequelize('e-commerce', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres'
// });


// module.exports = sequelize;

// const {Pool} = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommerce',
    password: 'postgres',
    port: 5432
});

module.exports = pool;

// var mysql = require('mysql');
// var connection = mysql.createConneciton({
//     host: 'mysql', 
//     user: 'root',
//     password: 'secret',
//     database: 'ecommerce'
// })

// module.export = connection;