const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('./'));

app.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.send(req.cookies);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
