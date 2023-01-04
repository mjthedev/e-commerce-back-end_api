var passport = require('passport'); 
var LocalStrategy = require('passport-local');
var { pool } = require('../models/db.ts');




function login(req: any) {
    passport.use(new LocalStrategy(function verify(req.body.username: any, req.body.password: any, cb: any) {
        pool.query('SELECT * FROM users WHERE username = ?', [ username ], function(err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
            
            // checking the password from the returned user in the database
        });
    }));
}
