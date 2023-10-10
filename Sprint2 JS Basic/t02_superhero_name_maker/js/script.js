function input_animal() {
    let animal = prompt('What animal is the superhero most similar to?', '');
    let regex = RegExp('^[a-zA-Z]+$');

    if (animal.length > 20 || !regex.test(animal)) {
        alert('ERROR');
        animal = null;
    } 

    return animal;
}

function input_gender() {
    let input =  prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
    let gender = RegExp('^male$|^female$|^$', 'i')

    if (!gender.test(input)) {
        alert('ERROR');
        input = null;
    }

    return input;
}

function input_age() {
    let age = prompt('How old is the superhero?', '');
    let regex = RegExp(/^[1-9]|[0-9]{0,4}$/)

    if (age.length > 5 || !regex.test(age)) {
        alert('ERROR');
        age = null;
    }

    return age;
}

function giveName() {
    let description;
    let animal, gender, age;
    while(animal == null) {
        animal = input_animal();
    }
    while(gender == null) {
        gender = input_gender();
    }
    while(age == null) {
        age = input_age();
    }
    if (RegExp('^male$', 'i').test(gender) && age < 18) {
        description = "boy";
    }
    else if (RegExp('^male$', 'i').test(gender) && age >= 18) {
        description = "man";
    }
    else if (RegExp('^female$', 'i').test(gender) && age < 18) {
        description = "girl";
    }
    else if (RegExp('^female$', 'i').test(gender) && age >= 18) {
        description = "woman";
    }
    else if (RegExp('^$').test(gender) && age < 18) {
        description = "kid";
    }
    else if (RegExp('^$').test(gender) && age >= 18) {
        description = "hero";
    }

    alert(animal + '-' + description);
}

giveName();