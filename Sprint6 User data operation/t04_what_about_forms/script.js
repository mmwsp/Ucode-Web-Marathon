function checkForm(event) {
    event.preventDefault();
    const testForm = event.target;
    const answer = testForm.elements['check'].value;
    const container = document.getElementById("res");

    const res = document.getElementById("res");
    res.innerHTML = "";
    
    if (answer !== '1') {
        const elem = document.createElement("p");
        elem.textContent = "Shame on you! Go and watch Avengers!";
        container.appendChild(elem);
    } else {
        const elem = document.createElement("p");
        elem.textContent = "Right!";
        container.appendChild(elem);
    }
}