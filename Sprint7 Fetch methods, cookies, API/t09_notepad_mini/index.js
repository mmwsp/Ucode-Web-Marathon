const express = require('express');
const Note = require('./Note.js')
const NotePad = require('./NotePad.js')

const app = express();
const jsonParser = express.json();
const port = 3000;
app.use(express.static('./'));

app.post('/', jsonParser, function(request, response) {
    let files = new NotePad()
    if (files.hasFiles())  {
        response.json({list: files.getRenderList()});
    }
});

app.post('/create', jsonParser, function(request, response) {
    let note = new Note(request.body.name, request.body.importance, request.body.content);
    let list = new NotePad();

    response.json({list: list.getRenderList()})
});

app.post('/getnote', jsonParser, function(request, response) {
    let list = new NotePad();
    response.json({list: list.getJsonList(request.body.filename)});
});

app.post('/delete', jsonParser, function(request, response) {
    let list = new NotePad();
    list.delete(request.body.filename);
    response.json({list: list.getRenderList()})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  