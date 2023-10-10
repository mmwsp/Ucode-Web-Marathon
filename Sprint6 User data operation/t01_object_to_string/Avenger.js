module.exports.Avenger = class Avenger{
    constructor(obj){
            this.name = obj.name;
            this.alias = obj.alias;
            this.gender = obj.gender;
            this.age = obj.age;
            this.powers = obj.powers;
        
            this.maker = () => {
                let arr = [`${this.alias.toUpperCase()}`].concat(this.powers);
                return arr.join('\n');
            }

            this.maker.toString = () => {
                return [`name: ${this.name}`,
                `gender: ${this.gender}`,
                `age: ${this.age}`
                ].join('\n');

            }

            Object.defineProperty(this.maker, 'name', {'value': this.constructor.name})
            return this.maker;
    }
}
