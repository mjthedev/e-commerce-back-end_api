let express = require('express');
const app = express();
const accountRoutes = require('./routes/AccountRoute')
const loginRoutes = require('./routes/LoginRoute');
require('dotenv').config()

const PORT = process.env.PORT_NUMBER;
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sessions = require('express-session');



// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// adding cors middleware
app.use(cors());

// adding cookie middleware

app.use(cookieParser());

//   adding logger middleware

app.use(logger('combined'))

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

// adding sessions middleware
app.use(sessions({
    secret: 'mysecret',
    saveUninitialized:true,
    cookie: {maxAge: oneDay},
    resave: false,
}));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', accountRoutes);
app.use('/', loginRoutes);



app.listen(PORT, console.log('app listening on port:', PORT));

export {};
