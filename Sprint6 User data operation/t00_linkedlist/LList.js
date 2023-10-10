let LLData = require('./LLData');

module.exports.LList = class LList {
    constructor() {
        this.head = null;
        this.len = 0;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        for(let i = this.head; i; i = i.next) {
            if(!i.next) {
                return i;
            }
        }
    }

    add(value) {
        if(this.len !== 0) {
            for(let i = this.head; i; i = i.next) {
                if(!i.next) {
                     i.next = new LLData(value);
                     this.len += 1;
                     break;
                }
            }
        }
        else {
            this.head = new LLData(value);
            this.len = 1;
        }
    }

    addFromArray(arrayOfData) {
        for(let i = 0; i < arrayOfData.length; i++) {
            this.add(arrayOfData[i]);
            this.len += 1;
        }
    }

    remove(value) {
        let current = this.head;
        let prev = null;
    
        while (current) {
            if (current.val === value) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.len -= 1;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    removeAll(value) {
        let current = this.head;
        let prev = null;
    
        while (current) {
            if (current.val === value) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                this.len -= 1;
            }
            prev = current;
            current = current.next;
        }
    }

    contains(value) {
        let cur = this.head;

        while(cur) {
            if(cur.val === value) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    clear() {
        this.head = null;
        this.len = 0;
    }

    count() {
        return this.len;
    }

    toString() {
        let nums = [];
        let cur = this.head;

        while(cur) {
            nums.push(cur.val);
            cur = cur.next;
        }
        return nums.join(', ');
    }

    *[Symbol.iterator]() {
        if(!this.head) {
            return;
        }
        let current = this.head;
        for(; current; ) {
            yield current.val;
            current = current.next;
        }
    }

    filter(callback) {
        return [...this].filter(callback);
    }

}