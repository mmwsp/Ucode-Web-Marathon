class HardWorker {

    constructor(name, age, salary) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }

    set age(val) {
        if (val <= 1 || val > 100) {
            // do nothing and keeping previous correct value (if it is)
        } else {
            this._age = val;
        }
    }

    set salary(val) {
        if(val <= 100 || val > 10000) {
            //do nothing and keeping previous correct value (if it is)
        }
        else {
            this._salary = val;
        }
    }

    get age() {
        return this._age;
    }

    get salary() {
        return this._salary;
    }

    toObject() {
        return this;
    }

}


 /* worker = new HardWorker;

 worker.name = 'Bruce';
 console.log(worker.name);

 worker.age = 50;
 worker.salary = 1500;
 console.log(worker.toObject());

 worker.name = 'Linda';
 worker.age = 140;
 console.log(worker.toObject()); */