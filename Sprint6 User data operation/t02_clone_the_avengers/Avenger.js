module.exports.Avenger = class Avenger{
    constructor(name, alias, gender, age, powers, hp){

            this.maker = () => {
                this.powers = powers;
                this.alias = alias;
    
                let arr = [`${this.alias.toUpperCase()}`].concat(this.powers);
                return arr.join('\n');
            }

            this.maker.toString = () => {
                this.name = name;
                this.gender = gender;
                this.age = age;

                return [`name: ${this.name}`,
                `gender: ${this.gender}`,
                `age: ${this.age}`
                ].join('\n');

            }

            Object.defineProperty(this.maker, 'name', {'value': this.constructor.name})
            this.maker.hp = hp;
            return this.maker;
    }
}
