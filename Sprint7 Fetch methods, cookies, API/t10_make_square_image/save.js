const fs = require('fs');
const request = require('request');

module.exports = function saveImage(uri, filename, callback){
    if(!fs.existsSync('temp/')){
        fs.mkdirSync('temp/');
    }
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};