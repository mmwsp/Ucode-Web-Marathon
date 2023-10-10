let submitButton = document.getElementById('submit');


submitButton.addEventListener('click', function (e) {
    console.log("go button");

    fetch('/getData')
    .then((res) => res.json())
    .then((data) => {
       document.querySelector('#content').innerHTML = buildRes(data); })
    
})


function buildRes(data) {
    let string = '';
    for(let content in data) {
        if(typeof data[content] != "object") {
            string = string + `<div><b>${content}</b>: ${data[content]}</div>`;
        } else {
            string = string + `<div><b>${content}</b>: ${buildRes(data[content])}</div>`;
        }
    }
    return string;
}







