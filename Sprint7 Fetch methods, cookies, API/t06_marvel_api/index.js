const express = require('express');
const app = express();
const PORT = 3000;
const crypto = require('crypto');

const pbk = '24774be50040f237dc3382d0c1104929';
const pvk = '646e90b6cb13ff76a877b42740c49214d5632018';

let textHash = '';

function callAPI() {
    textHash = crypto.createHash('md5').update(Date.now() + pvk + pbk).digest("hex");
    return fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${pbk}&hash=${textHash}&ts=` + Date.now())
        .then(res => res.json());
}

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/getData', async function(request, response) {
    response.json(await callAPI());

})

app.get('/style.css', function(request, response) {
    response.sendFile(__dirname + '/style.css');
});

app.get('/script.js', function(request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});