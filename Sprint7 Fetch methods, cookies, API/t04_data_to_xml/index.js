const express = require('express');
const app = express();
const ListAvengerQuotes = require('./ListAvengerQuotes');
const AvengerQuote = require('./AvengerQuote');

const port = 3000;

app.get('/list', (req, res) => {
    const list = new ListAvengerQuotes();
    const quote1 = new AvengerQuote(1, 'Antony', 'FOooFOOO', 's/asd/d.jpg', '19.23.3997', ['bebee', 'q', "ы"]);
    const quote2 = new AvengerQuote(1, 'Sanya', 'popa popa popa', 's/asd/popa.jpg', '12.10.2007', ['лох', '+++', "+"]);
    const quote3 = new AvengerQuote(1, 'Suharik', 'DSJADadsd', 's/asd/SUHARIK.jpg', '07.07.7777', ['jr', 'salam!', "eee"]);
    const quote4 = new AvengerQuote(1, 'HULK', 'AAAAAA', 's/asd/hulk.jpg', '23.02.2018', ['down', 'fooo', "mda"]);
    list.addQuote(quote1);
    list.addQuote(quote2);
    list.addQuote(quote3);
    list.addQuote(quote4);
    res.json({toXML: list.toXML(), fromXML: list.fromXML()});
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/script.js');
});


app.listen(port, () => console.log(`server is running on the port: ${port}`));