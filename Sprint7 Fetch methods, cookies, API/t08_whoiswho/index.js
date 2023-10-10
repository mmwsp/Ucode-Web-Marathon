const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

app.use(express.static('./'));

app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();
  const uploadDir = './uploads'; // Папка для сохранения загруженных файлов, создай для тестов)

  form.uploadDir = uploadDir;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    const fileName = "invalid-name";
    const filePath = `${uploadDir}/${fileName}`;

    let results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        res.json(results);
      });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
