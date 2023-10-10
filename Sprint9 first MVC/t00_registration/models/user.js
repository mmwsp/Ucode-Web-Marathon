const db = require('../db.js');
const bcrypt = require('bcrypt');
const Model = require('../model.js')

class User extends Model {
    constructor(login, password, fullName, email) {
        super();
        this.login = login;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
    }

    save(callback) {
        const query = 'INSERT INTO users (login, password, fullName, email) VALUES (?, ?, ?, ?)';
        let hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(3));
        const values = [this.login, hashedPassword, this.fullName, this.email];
    
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