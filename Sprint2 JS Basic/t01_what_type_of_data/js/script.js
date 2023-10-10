let num = 2;
let str = "rs";
let smbl = Symbol('*');
let long = 10n;
let bl = true;
let nl = null;
let undefnd;
let obj = {};
let func = () => {};

alert(`num is ${typeof num}
long is ${typeof long}
str is ${typeof str}
bl is ${typeof bl}
nl is null
undefnd is ${typeof undefnd}
obj is ${typeof obj}
smbl is ${typeof smbl}
func is ${typeof func}`);