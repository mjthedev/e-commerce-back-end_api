"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Sequelize } = require('sequelize');
const { Pool } = require('pg');
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
// pool.query('SELECT * FROM accounts;', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
module.exports = pool;
