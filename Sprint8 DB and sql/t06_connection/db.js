let mysql = require('mysql2');
const express = require('express');
const config = require('./config.json');
const app = express();

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
})

app.listen(3000, "127.0.0.1", function(){
    console.log("Port - 3000");
});

connection.connect(function(err) {
    console.log("Connection opened");
});

connection.query('SELECT 2 + 1 AS solution',function (err, res, fields) {
    if (err) {
        throw err;
    }
    console.log(res);
});

connection.end(function(err) {
    if (err) {
        return console.log("Error: " + err.message);
    }
    console.log("Connection closed");
});

