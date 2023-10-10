const db = require('../db.js');
const bcrypt = require('bcrypt');
const Model = require('./model.js')

class User extends Model {
    constructor(login, password, fullName, email, status) {
        super();
        this.login = login;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.status = status;
    }

    static async getUserByEmailFromDB(email) {
        try {
            const query_str = `SELECT * FROM users WHERE email='${email}'`;
            const rows = await db.promise().query(query_str);
            let dblogin;
            let dbpass;

            console.log(rows[0]);

            if(rows[0].length > 0){
                dblogin = rows[0][0]['login'];
                dbpass = rows[0][0]['password'];
                let dbUser = {
                    login: dblogin,
                    password: dbpass,
                    exist: true
                };
                return dbUser;
            } else {
                let dbUser = {
                    exist: false
                };
                return dbUser;
            }
            
        } catch (error) {
            throw new Error('Error fetching user from database: ' + error.message);
        }
    }

    static async getUserFromDB(login) {
        try {
            const query_str = `SELECT * FROM users WHERE login='${login}'`;
            const rows = await db.promise().query(query_str);
            let dblogin;
            let dbpass;

            console.log(rows[0]);

            if(rows[0].length > 0){
                dblogin = rows[0][0]['login'];
                dbpass = rows[0][0]['password'];
                let dbUser = {
                    login: dblogin,
                    password: dbpass,
                    exist: true
                };
                return dbUser;
            } else {
                let dbUser = {
                    exist: false
                };
                return dbUser;
            }
            
        } catch (error) {
            throw new Error('Error fetching user from database: ' + error.message);
        }
    }

    static async updateData(login, newData, field) {
        try {
          const query_str = `UPDATE users SET ${field} = ? WHERE login = ?`;
          const [rows] = await db.promise().query(query_str, [newData, login]);
      
          if (rows.affectedRows === 1) {
            console.log(`Success '${field}' update query.`);
            return true;
          } else {
            console.log(`User ${login} are not found.`);
            return false;
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    

    static async authenticateUser(login, password) {
        try {
            const userFromDB = await User.getUserFromDB(login);
    
            //const isPasswordMatch = await bcrypt.compare(password, userFromDB.password); task implies using no password hash.
    
            if (password === userFromDB.password) {
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
        //let hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(3));       task implies saving no password hash.
        const values = [this.login, this.password, this.status, this.fullName, this.email];
    
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