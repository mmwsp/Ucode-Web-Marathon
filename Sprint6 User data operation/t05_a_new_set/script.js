class Avenger {
    constructor(Name, mail, age, about, photo){
        this.Name = Name;
        this.mail = mail;
        this.age = age;
        this.about = about;
        this.photo = photo;
    }
}

let Name = document.getElementById('name');
let mail = document.getElementById('mail');
let age = document.getElementById('age');
let about = document.getElementById('description');
let photo = document.getElementById('photo');
let res_view = document.querySelector('.result_view');
let spans = document.getElementsByTagName('span')


function sendEvent(){
    if (
        Name.value.trim() === '' ||
        mail.value.trim() === '' ||
        age.value.trim() === '' ||
        about.value.trim() === '' ||
        photo.value.trim() === ''
    ) {
        alert('Вы не заполнили форму. Заполните  все  поля перед отправкой.');
        return;
    }

    let newAvanger = new Avenger(Name.value, mail.value, age.value, about.value, photo.value);
    res_view.style.display = 'unset';
    spans[0].innerHTML = newAvanger.Name;
    spans[1].innerHTML = newAvanger.mail;
    spans[2].innerHTML = newAvanger.age;
    spans[3].innerHTML = newAvanger.about;
    spans[4].innerHTML = newAvanger.photo;
    return newAvanger;
}

function clearEvent(){
    res_view.style.display = 'none';
    Name.value = '';
    mail.value = '';
    age.value = '';
    about.value = '';
    photo.value = '';
}

