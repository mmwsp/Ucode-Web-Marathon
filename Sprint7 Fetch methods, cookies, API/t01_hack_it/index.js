const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.send(` 
    <form method="POST" action="/save">
      <label for="password">Password:</label>
      <input  name="password" required><br>
      <label for="salt">Salt:</label>
      <input type="text" name="salt" required><br>
      <button type="submit">Save</button>
    </form>
  `);
});

app.post('/save', (req, res) => {
  const { password, salt } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 2);

  req.session.hashedPassword = hashedPassword;

  res.send(`Hashed password: ${hashedPassword}<br>
            <form method="POST" action="/check">
              <label for="guess">Guess the password:</label>
              <input  name="guess" required><br>
              <button type="submit">Check</button>
            </form>
            <form method="POST" action="/clear">
              <button type="submit">Clear Session</button>
            </form>`);
});

app.post('/check', (req, res) => {
  const { guess } = req.body;
  const hashedPassword = req.session.hashedPassword;

  if (bcrypt.compareSync(guess, hashedPassword)) {
    req.session.destroy();
    res.send('Hacked!<br><a href="/">Enter a new password</a>');
  } else {
    res.send('<span style="color: red;">Access denied!</span>');
  }
});

app.post('/clear', (req, res) => {

  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
