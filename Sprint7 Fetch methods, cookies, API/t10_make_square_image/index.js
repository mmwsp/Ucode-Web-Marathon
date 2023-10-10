const express = require('express');
const app = express();
const sharp = require('sharp');
const saveImage = require('./save');
const ejs = require('ejs');
const port = 3000;
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static('./'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', async (req, res) => {
    await saveImage(req.body.link, `temp/Origin.png`, () => { 
        changeColor(undefined, undefined, undefined, 'Prepared');
        changeColor(255, 0, 0, 'RChannel');
        changeColor(0, 255, 0, 'GChannel');
        changeColor(0, 0, 255, 'BChannel');
        res.render('index', {display: true});
    });

});

async function changeColor(r, g, b, name) {
    try {
      await sharp("temp/Origin.png")
        .tint({r: r, g: g, b: b})
        .toFile(`temp/${name}.png`);
    } catch (error) {
        console.log(error);
    }
}

app.listen(port, () => 
    console.log(`server is running on the port ${port}`));