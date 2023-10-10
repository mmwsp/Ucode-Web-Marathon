const express = require('express');
const app = express();
const jsonParser = express.json();
const port = 3000;
const User = require('./models/user');
app.use('/', express.static(__dirname + '/public'));

app.post('/', jsonParser, function(request, response) {
    let user = new User(request.body.login, request.body.password, request.body.fullName, request.body.email);

    user.save((err, results) => {
      if (err) {
          console.log(err);
          response.json({ status: 'ERROR' });
      } else {
          response.json({ status: 'SUCCESS' });
      }
  });
});

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/style.css', function (request, response) {
  response.sendFile(__dirname + '/public/style.css');
});


app.listen(port, () => {
    console.log(`Server is running on the localhost, port: ${port}`);
  });
  