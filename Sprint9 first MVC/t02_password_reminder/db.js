let mysql = require('mysql2');
const config = require('./config.json');

const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
})

module.exports = db;