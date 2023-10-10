exports.checkDivision = function(a = 1, b = 60) {
    for (let i = a; i <= b; i++) {
        let res = '-';

        if (i % 2 === 0) {
            res = 'is divisible by 2';
        }
        if (i % 3 === 0 && i % 2 === 0) {
            res = res + ', is divisible by 3';
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            res = 'is divisible by 3';
        }
        if (i % 10 === 0) {
            res = res + ', is divisible by 10';
        }

        console.log('The number ' + i + ' ' + res);
    }
}