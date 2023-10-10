//useless

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