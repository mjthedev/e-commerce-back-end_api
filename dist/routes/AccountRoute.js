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
    res.redirect(302, 'http://localhost:3000/login');
});
router.post('/getuser', (req, res) => {
    ShowAccounts(req);
});
router.get('/login', (req, res) => {
    console.log('login route is working');
});
module.exports = router;
