let first = +prompt('Enter the first num', '1');
let sec = +prompt('Enter the second num', '100');

function checkDivision(first, sec) {
    for (let i = first; i <= sec; i++) {
        let description = " - "

        if (i % 2 === 0) {
            description = " is even"
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            description = " is a multiple of 3"
        }
        else if (i % 3 === 0) {
            description = description.concat(", a multiple of 3")
        }
        if (i % 10 === 0) {
            description = description.concat(", a multiple of 10")
        }
        
        console.log(i + description + "\n")
    }
}

checkDivision(first, sec);