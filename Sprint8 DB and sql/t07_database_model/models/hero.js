const db = require('../db');
const Model = require('../model');

class Hero extends Model {
    constructor(name, description, class_role){
        super('heroes');
        this.name = name;
        this.description = description;
        this.class_role = class_role;
    }

    find(id) {
        super.find(id);
    }

    delete(id) {
        super.delete(id);
    }

    save() {
        super.save(data);
    }
}

module.exports = Hero;