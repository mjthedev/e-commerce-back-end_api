let express = require('express');
const app = express();
const accountRoutes = require('./routes/AccountRoute')
require('dotenv').config()

const PORT = process.env.PORT_NUMBER;
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const logger = require('morgan');

const initializePassport = require('./passport-config.ts');
// initializePassport(passport);


// adding cors middleware
app.use(cors());

// adding cookie middleware

app.use(cookieParser());

//   adding logger middleware

app.use(logger('combined'))

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', accountRoutes);
//app.use('/', loginRoutes);



app.listen(PORT, console.log('app listening on port:', PORT));

export {};
