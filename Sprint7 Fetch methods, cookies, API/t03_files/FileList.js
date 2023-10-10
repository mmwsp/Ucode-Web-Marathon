const fs = require('fs');

class FileList {

    getHTMLList() {
        let list = fs.readdirSync('./tmp');
        let strHTML = '<ul>';
        for (let i = 0; i < list.length; i++) {
            strHTML += `<li><a onclick="renderF(event)" href="/select-file?file=${list[i]}">${list[i]}</a></li>`;
        }
        strHTML += '</ul>';
        return strHTML;
    }

    getList() { return fs.readdirSync('./tmp'); }
    
    hasFiles() { return fs.existsSync('./tmp'); }
}

module.exports = FileList;