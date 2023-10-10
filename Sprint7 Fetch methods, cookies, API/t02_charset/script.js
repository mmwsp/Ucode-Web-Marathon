let submitButton = document.getElementById('submit');
let result = document.getElementsByClassName('hidden');
let clearButton = document.getElementById('clear');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let charForm = document.forms['options'];
    let inputStr = charForm.elements['inputString'].value;
    let options = [];
    let input = document.getElementById('input');
    let utf = document.getElementById('utf');
    let iso = document.getElementById('iso');
    let win = document.getElementById('win');
    let selected = document.getElementById('choose');

    for (let i = 0; i < selected.options.length; i++) {
        if (selected.options[i].selected) {
            options.push(selected.options[i].value);
        }   
        else {
            options.push('');
        } 
    }

    let user = JSON.stringify({
        inputStr: inputStr,
        options: options,
    });
    
    let request = new XMLHttpRequest()
    request.open('POST', '/', true);  
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.send(user);
    
    request.addEventListener('load', function () {
        let response = JSON.parse(request.response);
        
        if (response.input) {
            input.setAttribute('placeholder', response.input);
            result[0].setAttribute('style', 'display: block;');
        }
        else {
            result[0].setAttribute('style', 'display: none;');
        }
        if (response.utf) {
            utf.setAttribute('placeholder', response.utf);
            result[1].setAttribute('style', 'display: block;');
        }
        else {
            result[1].setAttribute('style', 'display: none;');
        }
        if (response.iso) {
            iso.setAttribute('placeholder', response.iso);
            result[2].setAttribute('style', 'display: block;');
        }
        else {
            result[2].setAttribute('style', 'display: none;');
        }
        if (response.win) {
            win.setAttribute('placeholder', response.win);
            result[3].setAttribute('style', 'display: block;');
        }
        else {
            result[3].setAttribute('style', 'display: none;');
        }

    });
    
});

clearButton.addEventListener('click', function (e) {
    for (let i = 0; i < 4; i ++) {
        result[i].setAttribute('style', 'display: none;');
    }
} );