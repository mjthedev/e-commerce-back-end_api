const express = require('express');
const router = express();
require('dotenv').config();
const pool = require('../models/db');
const {AddAccount, ShowAccounts} = require('../controllers/accounts');
const connection = require('../models/db');





router.post('/addaccount', (req: any, res: any) => {
    AddAccount(req)
    res.send('user added to database')
})


router.post('/getuser', (req: any, res: any) => {
    ShowAccounts(req);
})


module.exports = router;

export{}