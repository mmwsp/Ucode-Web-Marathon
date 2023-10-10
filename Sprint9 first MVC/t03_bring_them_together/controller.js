const User = require('./models/user');
const fs = require('fs');
const nodemailer = require("nodemailer");

class Controller {
    async registration(req, res, next) {
        let user = new User(req.body.login, req.body.password, req.body.fullName, req.body.email, 2);

        user.save((err, results) => {
          if (err) {
              console.log(err);
              res.json({ status: 'ERROR' });
          } else {
              req.session.loggedIn = true;
              req.session.login = req.body.login;
              res.json({ status: 'SUCCESS' });
          }
      });
    }

    async login(req, res, next) {
        if (req.session.loggedIn) {
            res.sendFile(__dirname + '/views/main.html');
            return;
        }
        if(await User.authenticateUser(req.body.login, req.body.password)) {
            req.session.loggedIn = true;
            req.session.login = req.body.login;
            res.json({ status: 'SUCCESS', role: '2' });
            return;
        }
        else {
            res.json({ status: 'ERROR' });
            return;
        }
    }

    async logout(req, res, next) {
        req.session.loggedIn = false;
        res.redirect('/');
    }

    async remind(req, res, next) {
        let user = await User.getUserByEmailFromDB(req.body.email);
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
                to: req.body.email,
                subject: 'password',
                html: `
                        <p>Dear user,</p>
                        <p>Your password is: ${user.password}</p>
                        <p>Do not forget it!</p>`
            });
            res.json({ status: 'SUCCESS'});
            return;
        }
        else {
            res.json({ status: 'ERROR' });
            return;
        }
    }

    async checkMain(req, res, next) {
        if (req.session.loggedIn) {
            res.sendFile(__dirname + '/views/main.html');
            return;
        } else {
            res.sendFile(__dirname + '/views/login.html');
            return;
        }
    }

    async getStart(req, res, next) {
        if (req.session.loggedIn) {
            res.sendFile(__dirname + '/views/main.html');
            return;
        } else {
            res.sendFile(__dirname + '/views/login.html');
            return;
        }
    }

    async changeData(req, res, next) {
        if(await User.updateData(req.session.login, req.body.newData, req.body.field)) {
            res.json({ status: 'SUCCESS' });
        }
        else {
            res.json({ status: 'ERROR' });
        }
    }

    getStyle(req, res, next) {
        res.sendFile(__dirname + '/public/style.css');
    }

    checkReg(req, res, next) {
        if (req.session.loggedIn) {
            res.sendFile(__dirname + '/views/main.html');
            return;
        } else {
            res.sendFile(__dirname + '/views/registration.html');
            return;
        }
    }

    checkLog(req, res, next) {
        if (req.session.loggedIn) {
            res.sendFile(__dirname + '/views/main.html');
            return;
        } else {
            res.sendFile(__dirname + '/views/login.html');
            return;
        }
    }

    checkReminder(req, res, next) {
        res.sendFile(__dirname + '/views/reminder.html');
    }
}

module.exports = new Controller()