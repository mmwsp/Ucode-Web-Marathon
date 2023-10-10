class Human {
    constructor(options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories ;
        this.img = options.img;
        this.hero = false;
    }

    sleepFor() {
        document.querySelector('#info').innerHTML = "I'm sleeping";
    }

    feed() {
        document.querySelector('#info').innerHTML = "Nom nom nom";
    }
}

class Superhero extends Human{
    fly() {
        document.querySelector('#info').innerHTML = `I'm flying`;
        setTimeout(()=> {
            document.querySelector('#info').innerHTML = "Turn into Superhero!";
        }, 10000);
    }
    fight () {
        document.querySelector('#info').innerHTML ="Khhhh-chh..." + "Bang-g-g-g... Evil is defeated!";
    }
}

let human = new Human({
    firstName: setFirstName(),
    lastName: setLastName(),
    gender: setGender(),
    age: setAge(),
    calories: setCalories(600),
    hero: false
});
let superhero = new Superhero(human);

document.querySelector('img').src = 'assets/images/qwe.png';
document.querySelector('#fly').disabled = true;
document.querySelector('#fight').disabled = true;

setTimeout(() => {
    loop()
}, 5000);
setInterval(loop, 60000);

function loop() {
    if (superhero.hero === false) 
    {
        if (human.calories > 0) {
            human.calories -= 200;
            setCalories(human.calories);
        }
        if (human.calories < 500)
            document.querySelector('#info').innerHTML = "I'm still hungry";
    }
    else {
        if (superhero.calories > 0) {
            superhero.calories -= 200;
            setCalories(superhero.calories);
        }
        if (superhero.calories < 500)
            document.querySelector('#info').innerHTML = "I'm still hungry";
    }
}

function hero() {
    if(human.hero === false) {
        if(human.calories > 500) {
            setFirstName("Cube");
            setLastName("x_x");
            superhero.hero = true;
            human.hero = true;
            superhero.calories = human.calories;
            document.querySelector('#info').innerHTML = "Turned into Superhero!!";
            document.querySelector('#hero').innerText = 'Back to human';
            enableButtons();
        }
        else {
            document.querySelector('#info').innerHTML = "Not enough calories";
        }
    }
    else if (superhero.hero === true) {
        setFirstName(human.firstName);
        setLastName(human.lastName);
        superhero.hero = false;
        human.hero = false;
        human.calories = superhero.calories;
        document.querySelector('#info').innerHTML = "I'm human";
        document.querySelector('#hero').innerText = 'Turn into Superhero!!';
        document.querySelector('#fly').disabled = true;
        document.querySelector('#fight').disabled = true;
    }
}

function fly() {
    superhero.fly();
    disableButtons();
    setTimeout(() => {
        document.querySelector('#info').innerHTML = "flyin"
        enableButtons();
    },10000);

}

function feed() {
    if (superhero.hero === false) {
        if (human.calories < 500) {
            human.feed()
            disableButtons();
            setTimeout(() => {
                human.calories += 200;
                setCalories(human.calories);
                document.querySelector('#info').innerHTML = "I'm human";
                enableHumanButtons();
            }, 10000)
        }
        else {
            document.querySelector('#info').innerHTML = "I am not hungry";
        }
    }
    else {
        if (superhero.calories < 500) {
            superhero.feed()
            disableButtons();
            setTimeout(() => {
                superhero.calories += 200;
                setCalories(superhero.calories);
                document.querySelector('#info').innerHTML = "Turn into Superhero!!";
                enableButtons();
            }, 10000)

        } 
        else {
            document.querySelector('#info').innerHTML = "I am not hungry";

        }
    }
}

function fight() {
    superhero.fight();
    disableButtons();
    setTimeout(() => {
        document.querySelector('#info').innerHTML = "fight"
        enableButtons();
    },10000);

}

function sleep() {
    if (superhero.hero === false) {
        document.querySelector('img').src = 'assets/images/qwe.png';
        disableButtons();
        human.sleepFor();
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() => {
                document.querySelector('#info').innerHTML = "I'm human";
                enableHumanButtons();
            },2000);
        },10000);

    }
    else {
        disableButtons();
        superhero.sleepFor();
        setTimeout(() => {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() => {
                document.querySelector('#info').innerHTML = "Ready to rock!";
                enableButtons();
            },2000);
            enableButtons();
        },10000);
    
    }
}

function setFirstName(name) {
    let firstName = document.getElementById('firstName');
    if(name === undefined) {
        while(firstName.innerText === "" || firstName.innerText === null) {
            firstName.innerText = prompt("First name?", "Sasha");
            let regex = RegExp('^[a-zA-Z]+$');
            if (firstName.innerText.length > 20 || !regex.test(firstName.innerText)) {
                alert('err');
                firstName.innerText = null;
            }
        }
    }
    else firstName.innerText = name;
    console.log(`firstName set to ${firstName.innerText}`);
    return firstName.innerText;
}

function setLastName(name) {
    let lastName = document.getElementById('lastName');
    if(name === undefined) {
        while(lastName.innerText === "" || lastName.innerText === null) {
            lastName.innerText = prompt("Last name", "Sanya");
            let regex = RegExp('^[a-zA-Z]+$');
            if (lastName.innerTextlength > 20 || !regex.test(lastName.innerText)) {
                alert('error');
                lastName.innerText = null;
            }
        }
    }
    else lastName.innerText = name;
    console.log(`lastName set to ${lastName.innerText}`);
    return lastName.innerText;
}

function setGender() {
    let gender = document.getElementById('gender');
    while(gender.innerText === "" || gender.innerText === null) {
        gender.innerText = prompt("Choose ur gender", "pinguin");
    }
    return gender.innerText;
}

function setAge() {
    let age = document.getElementById('age');
    while(age.innerText === "" || age.innerText === null) {
        age.innerText = prompt("Age", "45");
        let regex = RegExp(/^[1-9]|[0-9]{0,4}$/)
        if (age.innerText.length > 2 || !regex.test(age.innerText)) {
            alert('Err');
            age.innerText = null;
        }
    }
    return age.innerText;
}

function setCalories(calories) {
    let cl = document.getElementById('calories');
    cl.innerText = calories;
    return cl.innerText;
}

function disableButtons() {
    document.querySelector('#feed').disabled = true;
    document.querySelector('#sleep').disabled = true;
    document.querySelector('#hero').disabled = true;
    document.querySelector('#fly').disabled = true;
    document.querySelector('#fight').disabled = true;
}

function enableButtons() {
    document.querySelector('#feed').disabled = false;
    document.querySelector('#sleep').disabled = false;
    document.querySelector('#hero').disabled = false;
    document.querySelector('#fly').disabled = false;
    document.querySelector('#fight').disabled = false;
}

function enableHumanButtons() {
    document.querySelector('#feed').disabled = false;
    document.querySelector('#sleep').disabled = false;
    document.querySelector('#hero').disabled = false;
    document.querySelector('#fly').disabled = true;
    document.querySelector('#fight').disabled = true;
}
