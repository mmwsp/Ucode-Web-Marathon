const express = require('express');
const app = express();
const jsonParser = express.json();
const port = 3000;
const User = require('./models/user');
const nodemailer = require("nodemailer");

app.use('/', express.static(__dirname + '/public'));


app.post('/', jsonParser, async function(request, response) {
    let user = await User.getUserFromDB(request.body.email);
    if(user.exist) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your mailer mail',
                pass: 'password',
            }
        })
    
        transporter.sendMail({
            from: 'your mailer mail',
            to: request.body.email,
            subject: 'password',
            html: `
                    <p>Dear user,</p>
                    <p>Your password is: ${user.password}</p>
                    <p>Do not forget it!</p>`
        });
        response.json({ status: 'SUCCESS'});
        return;
    }
    else {
        response.json({ status: 'ERROR' });
        return;
    }
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});


app.get('/style.css', function (request, response) {
  response.sendFile(__dirname + '/public/style.css');
});


app.listen(port, () => {
    console.log(`Server is running on the localhost, port: ${port}`);
  });
  