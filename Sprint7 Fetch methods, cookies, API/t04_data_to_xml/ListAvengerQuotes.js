const AvengerQuote = require('./AvengerQuote');
const xml = require('xml2js');
const fs = require('fs');

class ListAvengerQuotes {

    constructor(){
        this.arr = [];
        this.xmlPath = __dirname + '/avenger_quote.xml';
    }

    addQuote(quote){
        this.arr.push(quote);
    }

    toXML(){
        const builder = new xml.Builder();
        const obj = this.arr.reduce((acc, cur) => ({ ...acc, [cur.author]: cur}), {})
        const xmlData = builder.buildObject(obj);
        fs.writeFileSync(this.xmlPath, xmlData);
        return xmlData;
    }

    fromXML(){
        let data = '';
        let result = '';

        if(fs.existsSync(this.xmlPath)){
            data = fs.readFileSync(this.xmlPath).toString();
            const parser = new xml.Parser();
            parser.parseString(data, (err, data) => {
                if(err){
                    return err;
                }
                result = data; 
            });
            return result;
        }
    }
}

module.exports = ListAvengerQuotes;
