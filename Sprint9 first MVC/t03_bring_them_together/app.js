const express = require('express');
const routes = require('./router.js');
const session = require('express-session');

const app = express();
app.use('/', express.static(__dirname + '/public'));
app.use(session({
        secret: 'cdb21',
        resave: true,
        saveUninitialized: true
    })
);

app.use(routes);

app.use(function (req, res, next) {
    res.status(404).send("404 Not Found")
});

app.listen(3000, () => {
    console.log(`Server is running on the localhost, port: ${3000}`);
  });
  