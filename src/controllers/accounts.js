const pool = require('../models/db');
const bycrypt = require('bcrypt');
const saltRounds = 10;
// const chalk = require('chalk');


function ShowAccounts() {
    pool.query('SELECT * FROM accounts;', (err, res) => {
        let data = res.rows;
        console.log(res.rows);
    })
}



// The function AddAccount is doing a few things:
// first its bringing in the req object through the req parameter
// then we're parsing the JSON object so that we can access the data for destructuring
// once destructured, we can now move on to using the variables from our req object within our function
// we use the bcrypt library to hash our password coming in from the 
function AddAccount(req) {
    const data = JSON.parse(JSON.stringify(req.body))
    // destructuring data object to store values into database once the password is hashed
    const { firstname, lastname, username, password, email } = data;
    console.log(password);
    // creating a hashing function 
    function hashedPassword() {
        bycrypt.hash(password, saltRounds, function(err, hash) {
            let hashedData = hash;

            const query = 'INSERT INTO accounts (first_name, last_name, username, password, email) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [firstname, lastname, username, hash, email];
            pool.query(query, values, (err, res) => {
                if(err) {
                    console.log(err.stack)
                     } else console.log(res.rows)
                }); 

            console.log(`hashed password ${hash}`)
           
    });
}
    hashedPassword();
    // console.log(`hased password: ${hashedPassword()}`);    
    // console.log(`data coming in from req.body after being parsed ${data}`);
}





function ShowAccounts(req) {
    const loggedin = false;
    const loggingUser = JSON.parse(JSON.stringify(req.body))
    
    // const loggingUser = JSON.parse(JSON.stringify(req));
    // console.log(loggingUser);

    const query = 'SELECT * FROM accounts;';
    let data = [];
    pool.query(query, (err, res) => {
        if(err) {
            console.log(err.stack);
        } else {
            const dbdata = res.rows;
            // console.log(res.rows);
            // data.map()
            data = dbdata;
        }
        // console.log(data)
        
    const newData = data.filter(user => { 
        // return user object
        if(user.username === loggingUser.username) {
            return true;
        }
    });

    // then compare the user object password from db with the logging in user password
    console.log(newData);
    // the user object from the database is in an array and we need to access the object returned from our filter method from above
    const user = newData[0];
            // we assign the outcome of the function below to determine whether the password provided is a match or not
           let dbResult = bycrypt.compareSync(loggingUser.password, user.password);

           console.log(dbResult);

            // check if user is loggedin depending on what boolean value the variable dbResult returns
           function userLoggedIn(user) {
            if(user) {
                return console.log(`user officially logged in`);
            } else return console.log(`user not authenticated`);
           }

           userLoggedIn(dbResult)
        
        if(newData.length > 0) {
            console.log('user does exist')
        } else {
            console.log('user does not exist')
        }
    });


    // const data = req.body;
    // const {username, password} = data;



}

module.exports = {
    ShowAccounts,
    AddAccount,
};