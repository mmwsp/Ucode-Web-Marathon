const express = require('express');
const iconv = require('iconv-lite');

const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, function (req, res) {
    let utf = '';
    let iso = '';
    let win = '';

    if(req.body.options[0]) {
        utf = req.body.inputStr;
    }
    if(req.body.options[1]) {
        iso = iconv.encode(iconv.decode(req.body.inputStr, 'utf8'), 'iso-8859-1').toString();
    }
    if(req.body.options[2]) {
        win = iconv.encode(iconv.decode(req.body.inputStr, 'utf8'), 'cp1252').toString();
    }
    res.json({ input: req.body.inputStr, 
        utf: utf,
        iso: iso,
        win: win
    });

});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on the port: ${PORT}`);
});