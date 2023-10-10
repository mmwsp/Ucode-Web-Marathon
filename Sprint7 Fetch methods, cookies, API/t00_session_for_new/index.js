const express = require('express');
const session = require('express-session');
const jsonParser = express.json();

const app = express();
let indicator = 1;

app.use(session({
  secret: 'zhopa',
  resave: true,
  saveUninitialized: true,
}));

app.post('/', jsonParser, function (request, response) {
  indicator = 0; 
  ses = request.session;
  console.log(request.body);

  ses.realName = request.body.realName;
  ses.superHeroName = request.body.superHeroName;
  ses.age = request.body.age;
  ses.description = request.body.description;
  ses.photo = request.body.photo;
  ses.exp = request.body.exp;
  ses.levelControl = request.body.levelControl;
  ses.radio = request.body.radio;

  response.json({ 
    realName: ses.realName,
    superHeroName: ses.superHeroName,
    age: ses.age, 
    description: ses.description,
    photo: ses.photo,
    exp: ses.exp, 
    levelControl: ses.levelControl,
    radio: ses.radio,});

});

app.get('/', function (request, response) {
  if (indicator == 0) {
      return response.sendFile(__dirname + '/hero.html');
  }
  response.sendFile(__dirname + '/index.html');
});

app.post('/hero', jsonParser, function(request, response) {
  indicator = 1;
  return response.redirect('/');
});

app.get('/hero' ,jsonParser, function(request, response) {
  ses = request.session;
  response.json({  realName: ses.realName,
                  superHeroName: ses.superHeroName,
                  age: ses.age, 
                  description: ses.description,
                  photo: ses.photo,
                  exp: ses.exp, 
                  levelControl: ses.levelControl,
                  radio: ses.radio,});
});

app.get('/hero.html', function (request, response) {
  indicator = 0;
    return response.sendFile(__dirname + '/hero.html');
});

app.get('/script.js', function (request, response) {
  response.sendFile(__dirname + '/script.js');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});