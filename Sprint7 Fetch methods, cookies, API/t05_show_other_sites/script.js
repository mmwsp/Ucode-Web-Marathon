document.getElementById('load').addEventListener('click', function (e) {
    e.preventDefault();

    let linkForm = document.forms['linkForm'];
    let url = linkForm.elements['url'].value;
    let req = JSON.stringify({ url: url, });

    let request = new XMLHttpRequest()
    request.open('POST', '/', true);
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.addEventListener('load', function () {
        let res = JSON.parse(request.response);

        document.getElementById('urlText').innerText = `url: ${res.url}`;
        document.getElementById('content').innerText = res.html;

        linkForm.elements['url'].value = '';
    });

    request.send(req);

});