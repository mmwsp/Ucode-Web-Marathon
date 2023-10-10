/* ------------------------Set-------------------------- */

const guestList = new Set();
guestList.add('Ton');  
guestList.add('Ali');
guestList.add('Zhopa');

console.log("Guest set");
for(let el of guestList) { 
    console.log(el);
}

guestList.delete('Ali'); 
console.log("\n ----Delete Ali"); 
console.log("\nTon in set? " +  guestList.has('Ton')); 
console.log("\nSize of Set: " + guestList.size);  

guestList.clear();  

/* ------------------------Map-------------------------- */

console.log("\n\nMenu map");
const menu = new Map();
menu.set('Volkswagen','3200$');
menu.set('Cheese','2.5$');
menu.set('Burger','4$');

for(let el of menu) {
    console.log(el);
}

console.log("\nVolkswagen`s price:  " + menu.get('Volkswagen'));
console.log("\nSize of Map: " + menu.size);  
menu.delete('Volkswagen');
menu.clear();

/* ------------------------Weak map-------------------------- */

console.log("\n\nBank Vault WeakMap")
const bankVault = new WeakMap();
let obj1 = {};
let obj2 = {};
let obj3 = {};
let obj4 = {};
bankVault.set(obj1, '3000$');
bankVault.set(obj2, '22333$');
bankVault.set(obj3, '777$');
bankVault.set(obj4, '1488$');

console.log(bankVault);
console.log("\nMoney of obj3 key user: " + bankVault.get(obj3));
bankVault.delete(obj1);
bankVault.size;

/* ------------------------Weak set-------------------------- */

console.log("\n\nCoin Collection WeakSet")
const coinCollection = new WeakSet();
let coin_1 = { name: "5 Cent" };
let coin_2 = { name: "50Cent" };
let coin_3 = { name: "25 Cent" };
let coin_4 = { name: "1 Cent" };
let coin_5 = { name: "10 Cent" };

coinCollection.add(coin_1);
coinCollection.add(coin_2);
coinCollection.add(coin_3);
coinCollection.add(coin_4);
coinCollection.add(coin_5);

console.log("50Cent in WeakSet?  " + coinCollection.has(coin_1));
coinCollection.delete(coin_4);
console.log(coinCollection);