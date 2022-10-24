const express = require('express');
const app = express();
const usersRoutes = require('./routes/UsersRoute')
require('dotenv').config()

const PORT = process.env.PORT_NUMBER;
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// adding cors middleware
app.use(cors());

// adding cookie middleware

app.use(cookieParser());


// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());






app.listen(PORT, console.log('app listening on port:', PORT));