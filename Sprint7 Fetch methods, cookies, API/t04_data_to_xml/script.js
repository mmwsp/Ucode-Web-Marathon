const fromXML = document.getElementById('fromXML');
const toXML = document.getElementById('toXML');

function getList() {
    let request = new XMLHttpRequest()
    request.open('GET', '/list', true);
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.responseType = 'json';

    request.onload = () => {
        const data  =  request.response;
        console.log(data);
        fromXML.innerText = 'from XML:\n' + JSON.stringify(data.fromXML);
        toXML.innerText = 'to XML:\n' + data.toXML;
    }
    request.onerror = () => {
        console.error(request.response);
    }
    
    request.send()
}
