const pool = require('../models/db');



function ShowAccounts() {
    pool.query('SELECT * FROM accounts;', (err, res) => {
        let data = res.rows;
        console.log(res.rows);
    })
}


function AddAccount(req) {
    const data = JSON.parse(JSON.stringify(req.body))
    const query = 'INSERT INTO accounts (first_name, last_name, username, password, email) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    
    
    const { firstname, lastname, username, password, email } = data;

    const values = [firstname, lastname, username, password, email];
    pool.query(query, values, (err, res) => {
        if(err) {
            console.log(err.stack)
        } else console.log(res.rows)
    });

    console.log(`data coming in from req.body after being parsed ${data}`);
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
        
        let newData = data.filter(user => {
            if(user.username === loggingUser.username && user.password === loggingUser.password){
                return true;
            } return false;
        });

        
        if(newData.length > 0) {
            console.log('user is logged in')
        } else {
            console.log('user is not logged in')
        }
        
        

    });


    // const data = req.body;
    // const {username, password} = data;



}

module.exports = {
    ShowAccounts,
    AddAccount,
};