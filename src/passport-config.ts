const LocalStrategy = require('passport-local');



function initialize(passport: any): any {
    const authenticateUser = (email: string, password: string, done:string) => {

    }
    passport.use(new LocalStrategy({usernameField: 'email'}), 
    authenticateUser)

    passport.serializeUser((user:string, done: string) => {});
    passport.deserializeUser((id:string, done: string) => {});
}
