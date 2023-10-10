const express = require('express');
const app = express();
const ip = require('ip');
const url = require('url');
const path = require('path');

const host = 'localhost';
const port = 3000;


app.get('/', (req, res) => {
    res.send('qq');
    const info = [
        `filename: ${path.basename(__filename)}`, 
        `arguments: ${process.argv.slice(2)}`,
        `server's IP: ${req.ip}`,
        `hostname: ${req.headers.host}`,
        `a name and a version of the IP: ${req.protocol} and ${req.httpVersion}`,
        `query method: ${req.method}`,
        `User-Agent information: ${req.get('user-agent')}`,
        `IP address of the client: ${ip.address()}`,
        `a list of parameters passed by URL: ${req.url.slice(1)}`
    ];
    console.log(info.join('\n'));

});

app.listen(port, () => console.log(`server is running on http://${host}:${port}\n`));
