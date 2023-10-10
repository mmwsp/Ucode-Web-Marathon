const db = require('../db.js');
const bcrypt = require('bcrypt');
const Model = require('../model.js')

class User extends Model {
    constructor(login, password, fullName, email, status) {
        super();
        this.login = login;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.status = status;
    }

    static async getUserFromDB(login) {
        try {
            const query_str = `SELECT * FROM users WHERE login='${login}'`;
            const rows = await db.promise().query(query_str);
            let dblogin;
            let dbpass;

            if(rows[0].length > 0){
                dblogin = rows[0][0]['login'];
                dbpass = rows[0][0]['password'];
                let dbUser = {
                    login: dblogin,
                    hashedPassword: dbpass
                };
                return dbUser;
            }
            console.log(rows[0]);
    
  
        } catch (error) {
            throw new Error('Error fetching user from database: ' + error.message);
        }
    }
    

    static async authenticateUser(login, password) {
        try {
            const userFromDB = await User.getUserFromDB(login);
    
            const isPasswordMatch = await bcrypt.compare(password, userFromDB.hashedPassword);
    
            if (isPasswordMatch) {
                console.log('\n! Success !\n');
                return true;
            } else {
                console.log('\n! Error !\n');
                return false;
            }
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    save(callback) {
        const query = 'INSERT INTO users (login, password, status, fullName, email) VALUES (?, ?, ?, ?, ?)';
        let hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(3));
        const values = [this.login, hashedPassword, this.status, this.fullName, this.email];
    
        db.query(query, values, (err, results) => {
            if (err) {
                console.error('Error saving user:', err.message);
                callback(err, null);
            } else {
                console.log('User saved successfully:', results);
                callback(null, results); 
            }
        });
    }
}

module.exports = User;