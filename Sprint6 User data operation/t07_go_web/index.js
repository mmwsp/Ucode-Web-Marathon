const express = require('express');
const app = express();


const normalRouter = require('./normal-router');
const quantumRouter = require('./quantum-router');

app.set('view engine', 'ejs');

app.use('/normal', normalRouter);
app.use('/quantum', quantumRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});