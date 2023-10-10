module.exports.EatException = class EatException extends Error {
    constructor(product_name, meal_type) { 
        super();
        this.message = 'No more junk food, dumpling';
        this.message = `Too many calories in ${product_name} for ${meal_type}`;
    }
}