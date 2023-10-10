let sendButton = document.getElementById('submit');

sendButton.addEventListener('click', function (e) {
    e.preventDefault();
    location.href='/hero.html';
    let heroForm = document.forms['form'];

    let realName =  heroForm.elements['realName'].value;
    let alias = heroForm.elements['superheroAlias'].value;
    let age = heroForm.elements['age'].value;
    let description = heroForm.elements['about'].value;
    let photo = heroForm.elements['photo'].value;
    let exp = heroForm.elements['exp'];
    let levelControl = heroForm.elements['levelControl'].value;
    let radio = heroForm.elements['radiogroup'].value;

    let len;
    let expAmount = 0;
    for (let i = 0, len = exp.length; i < len; i++) {
        if (exp[i].type === "checkbox" && exp[i].checked){
            expAmount += 1;
        }
    }

    let user = JSON.stringify({
        realName: realName,
        superHeroName: alias,
        age: age,
        description: description,
        photo: photo,
        exp: expAmount,
        levelControl: levelControl,
        radio: radio,
    })

    let request = new XMLHttpRequest()
    request.open('POST', '/', true);
    request.setRequestHeader( 'Content-Type', 'application/json');
    request.send(user);

})