const express = require('express');
const File = require('./File');
const FileList = require('./FileList');
const app = express();
const jsonParser = express.json();

const PORT = 3000;

app.post('/', jsonParser, function(req, res) {
    let files = new FileList()
    if (files.hasFiles())  {
        res.json({list: files.getHTMLList()});
    }
});

app.post('/write', jsonParser, function(req, res) {
    let files = new FileList()
    let filename = new File(req.body.fname);
    filename.write(req.body.content);
    res.json({list: files.getHTMLList()});
});

app.post('/read', jsonParser, function(req, res) {
    let str = (new File(req.body.filename)).read();

    res.json({ filename: req.body.filename, content: str});
});

app.post('/delete', jsonParser, function(req, res) {
    let file = new File(req.body.file);
    let files = new FileList();

    file.delete();
    if (files.hasFiles())  {
        res.json({list: files.getHTMLList()});
    }
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (req, res) {
    res.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server running on the port: ${PORT}`);
});