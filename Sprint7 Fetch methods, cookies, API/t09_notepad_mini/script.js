let submitButton = document.getElementById('submit');
let noteslist = document.getElementById('noteslist');
let noteInfo = document.getElementById('noteInfo');

let request = new XMLHttpRequest()
request.open('POST', '/', true);
request.setRequestHeader( 'Content-Type', 'application/json');
request.send();
request.addEventListener('load', function () {
    let res = JSON.parse(request.response);
    noteslist.innerHTML = res.list;
});
        


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let content = document.getElementById('content');
    let importance = document.getElementById('importance')

    if (name.value != '' && content.value != '') {
        let note = JSON.stringify({
            name: name.value,
            importance: importance.value,
            content: content.value,
        });
        
        let request = new XMLHttpRequest()
        
        request.open('POST', '/create', true);
        
        request.setRequestHeader( 'Content-Type', 'application/json');
        
        request.addEventListener('load', function () {
            let res = JSON.parse(request.response);
            noteslist.innerHTML = res.list;
        });
        
        name.value = '';
        content.value = '';

        request.send(note);
    } 
});

function renderF(event) {
    event.preventDefault();
    let el = event.target;
    console.log("INSIIDE");

    let name = JSON.stringify({
        filename: el.innerText.split('>')[1],
    });

    let request = new XMLHttpRequest();
        
    request.open('POST', '/getnote', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(name);
    request.addEventListener('load', function () {
        let res = JSON.parse(request.response);
        
        let h3Element = document.createElement('h3');
        h3Element.textContent = `Details of file: ${el.innerText.split('>')[1]}`;

        noteInfo.innerHTML = '';

        noteInfo.appendChild(h3Element);

        noteInfo.innerHTML += res.list;
    });
}


function deleteFile(event) {
    event.preventDefault()
    let el = event.target;
    noteInfo.innerHTML = ''
    let name = JSON.stringify({
        filename: el.name,
    });

    let request = new XMLHttpRequest()
    request.open('POST', '/delete', true);
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.send(name);
    request.addEventListener('load', function () {
        let res = JSON.parse(request.response);
        noteslist.innerHTML = res.list;

    });
}