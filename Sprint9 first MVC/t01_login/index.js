const express = require('express');
const session = require('express-session');
const app = express();
const jsonParser = express.json();
const port = 3000;
const User = require('./models/user');

app.use('/', express.static(__dirname + '/public'));
app.use(session({
    secret: 'biber',
    resave: false,
    saveUninitialized: true
}));

app.post('/', jsonParser,async function(request, response) {
    if (request.session.loggedIn) {
        response.sendFile(__dirname + '/public/main.html');
        return;
    }
    if(await User.authenticateUser(request.body.login, request.body.password)) {
        request.session.loggedIn = true;
        response.json({ status: 'SUCCESS', role: '2' });
        return;
    }
    else {
        response.json({ status: 'ERROR' });
        return;
    }
});

app.get('/', function (request, response) {
    if (request.session.loggedIn) {
        response.sendFile(__dirname + '/public/main.html');
        return;
    } else {
        response.sendFile(__dirname + '/public/index.html');
        return;
    }
});

app.get('/logout', function (request, response) {
    request.session.loggedIn = false;
    response.redirect('/');
});

app.get('/main', function (request, response) {
    if (request.session.loggedIn) {
        response.sendFile(__dirname + '/public/main.html');
        return;
    } else {
        response.sendFile(__dirname + '/public/index.html');
        return;
    }
});

app.get('/style.css', function (request, response) {
  response.sendFile(__dirname + '/public/style.css');
});


app.listen(port, () => {
    console.log(`Server is running on the localhost, port: ${port}`);
  });
  