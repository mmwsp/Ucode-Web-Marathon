function checkBrackets(str) {
    let l = 0;
    let r = 0;
    let out = 0;
    if (!str) {
        return String(-1);
    }
    
    for (let i = 0 ; i < str.length; i++) {
        if (str[i] === '(') {
            l++;
        }
        else if (str[i] === ')') {
            r++;
            if (r > l) {
                out++;
                r = 0;
                l = 0;
            }
        }
    }
    if (l === 0 && r === 0 && out === 0) {
        out = -1;
    }
    else if (l > r) {
        out += l - r;
    }
    return String(out);
}