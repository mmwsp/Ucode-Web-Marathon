const express = require('express');
const app = express();
const axios = require('axios');
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, async function(request, response) {
    const html = await axios.get(request.body.url);
    let content = JSON.stringify(html.data)
    let res = JSON.parse(content);
    let body = res.slice(res.indexOf('body')-1, res.indexOf('/body')+6);
    response.json({html: body, url: request.body.url,});
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get("/script.js", function(request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server is running on the port: ${PORT}`);
});