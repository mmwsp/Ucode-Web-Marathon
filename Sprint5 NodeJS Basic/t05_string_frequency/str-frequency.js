module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
    }

    reverseString() {
        return this.str.split("").reverse().join("");
    }

    letterFrequencies() {
        let freq = {};
        let lettersArr = this.str.toUpperCase().split('').filter(c => c.match(/[A-Z]/g));
        lettersArr = lettersArr.join('');

        for (let i = 0; i < lettersArr.length; i++) {
            let ltr = lettersArr.charAt(i);

            if (freq[ltr]) {
               freq[ltr]++;
            } else {
               freq[ltr] = 1;
            }
        }

        return freq;
    }

    wordFrequencies() {
        let res = {};

        if (!this.str) {
            let dflt = {};
            dflt[""] = 1;
            return dflt;
        }
        let wordsArr = this.str.toUpperCase().split(/[^A-Z]+/g).filter(f => f !== '');
        wordsArr.forEach(w => {
            res[w] = (res[w] || 0) + 1;
        });

        return res;
    }
}