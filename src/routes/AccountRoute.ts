const express = require('express');
const router = express();
require('dotenv').config();
const pool = require('../models/db');
const {AddAccount, ShowAccounts} = require('../controllers/accounts');
const connection = require('../models/db');




router.post('/addaccount', (req: any, res: any) => {
    AddAccount(req)
    res.redirect(302, 'http://localhost:3000/login')
});


router.post('/getuser', (req: any, res: any) => {
    ShowAccounts(req);
    res.end();
});

router.get('/show', (req: any, res: any) => {

    connection.query('SELECT * FROM accounts;', (err: any, res: any) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res.rows)
        }
    });
    res.end();    
});

module.exports = router;

export{}
