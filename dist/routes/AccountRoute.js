"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express();
require('dotenv').config();
const pool = require('../models/db');
const { AddAccount, ShowAccounts } = require('../controllers/accounts');
const connection = require('../models/db');
router.post('/addaccount', (req, res) => {
    AddAccount(req);
    res.send('user added to database');
});
router.post('/getuser', (req, res) => {
    ShowAccounts(req);
});
module.exports = router;
