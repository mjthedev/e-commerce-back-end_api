const express = require('express');
const router = express().router;
require('dotenv').config();




router.get('/users', (req, res) => {
    console.log('users route working')
});


module.exports = router;