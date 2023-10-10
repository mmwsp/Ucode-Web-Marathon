let submitButton = document.getElementById('submit');
let flist = document.getElementById('flist');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let fname = document.getElementById('fname');
    let content = document.getElementById('content');
    
    if (fname.value != '' && content.value != '') {
        let user = JSON.stringify({
            fname: fname.value,
            content: content.value,
        });
        
        let request = new XMLHttpRequest()
        request.open('POST', '/write', true);
        request.setRequestHeader( 'Content-Type', 'application/json');
        request.addEventListener('load', function () {
            let response = JSON.parse(request.response);
            flist.innerHTML = response.list;
        });
        
        fname.value = '';
        content.value = '';
        request.send(user);
        console.log(user);
    }    
});

document.getElementById('delete').addEventListener('click', function(e) {
    let file = document.getElementById('filename').innerText
    let user = JSON.stringify({
        file: file,
    });

    let request = new XMLHttpRequest()
    request.open('POST', '/delete', true);
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.send(user);
    request.addEventListener('load', function () {
        let res = JSON.parse(request.response);
        flist.innerHTML = res.list;
        document.getElementById('file').setAttribute('style', 'display: none');
    });
});


function renderF(event) {
    event.preventDefault()
    let el = event.target;

    let user = JSON.stringify({
        filename: el.innerText,
    });

    let request = new XMLHttpRequest()
    request.open('POST', '/read', true);
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.addEventListener('load', function () {
        let res = JSON.parse(request.response);

        document.getElementById('file').setAttribute('style', 'display: block');
        document.getElementById('filename').innerText = res.filename;
        document.getElementById('fileContent').innerText = res.content;
    });
        
    request.send(user);
}
