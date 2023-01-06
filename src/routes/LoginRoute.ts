const express = require('express');
const router = express();
const connection = require('../models/db');
const bcrypt = require('bcrypt');

// a variable to save a session
var session;



router.get('/check', (req: any, res: any) => {
    // check if request user password matches password stored in database
    session=req.session;
    if (session.userid) {
        res.send(`Welcome ${req.session.userid}`)
    } else {
          res.redirect('localhost:3000');
    }
    // if req.body.password returns true set headers for session and cookies
});

router.post('/userlogin',(req: any, res: any) => {
   
    const username = req.body.username;
    const password = req.body.password;
// 
//    console.log('username submitted: ', username);
//    console.log('password submitted: ', password);



    // check if username and password from the request object matches database
    connection.query('SELECT * FROM accounts WHERE username = $1', [username], function(err: any, data: any) {
        if (err) {
            // logging error if truthy
            console.log(err);
        } else {
            // logging data from query
            // console.log(data.rows);
            // storing returned user from database to user variable
            const user = data.rows[0];
            // storing the returned boolean value from the bcrypt.compareSync() in a checkedPassword variable 
            // the first argument is the password the user provided and the second is the password stored in the database
            const checkedPassword = bcrypt.compareSync(req.body.password, user.password);
            // logging value of checkedPassword variable
            console.log('password summited was: ',checkedPassword);
            // conditional if statement for  
            if(req.body.username == user.username && checkedPassword){
                // storing session middleware in session variable from request object
                session=req.session;
                // storing request object body username in session.userid
                session.userid=req.body.username;
                // logging user session
                console.log(req.session)
                // logging all sessions
               req.sessionStore.all((error: any, sessions: any) =>  {
                   if (error) {
                       // logging error if truthy
                       console.error(error);
                   } else {
                       // logging all sessions
                       console.log(sessions);
                   }
               });
                   
               // send string with user session and logout button to the browser or user client 
                res.send(`Hey there, welcome ${session.userid}<a href=\'/logout'>click to logout</a>`);
            }
            else{
                // if either the username or password are incorrect send the following message
                res.send('Invalid username or password');
            }
        }

    });
});

// this route will log the user out, clear the user session and redirect the user to the login page
router.get('/logout', (req: any, res:any) => {
          req.session.destroy();
          res.redirect('http://localhost:3000/login')
});


module.exports =  router;


