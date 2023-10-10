class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.len = 0; 
    }

    add(val) {
        let node = new Node(val); 

        if (this.len === 0) {  
            this.head = node; 
        } else {
            let current = this.head;
    
            while(current.next) {
                current = current.next;
            }
    
            current.next = new Node(val);
        }
    
        this.len++;
    }

    remove(el) {
        if (this.head.value == el) {
            this.head = this.head.next;
            this.len--;
            return true;
        } 
        else {
            for (let i = this.head; i.next; i = i.next) {
                if (i.next.value == el) {
                    i.next = i.next.next;
                    this.len = this.len - 1;
                    return true;
                }
            }
            return false;
        }
    }

    contains(val) {
        let count = 0;
        let current = this.head;
 
        while (current != null) {

            if (current.value === val)
                return true;
            count++;
            current = current.next;
        }

        return false;
    }

    clear() {
        let current = this.head;         
        while (current) {
            let nextNode = current.next;
            current.value = null;
            current.next = null;
            current = nextNode;
        }
        this.head = null; 
        this.len = 0;
        /* or just: 
            this.head = null; 
            this.len = 0;
        We set head to null, that means that other Nodes is unreacheable and garbageCollector can delete them.
        */
    }

    count() {
        return this.len;
    }
 
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.value;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };

    log() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.value + ", ";
            curr = curr.next;
        }
        console.log(str);
    }

}

function createLinkedList(arr) {
    const linkedlist = new LinkedList();
    arr.forEach(val => linkedlist.add(val));
    return linkedlist;
}


/* const ll = createLinkedList([ 1, 2, 3, 4, 5, 100]);
ll.log();
ll.remove(100);
ll.log();
ll.add(10)

ll.log();
console.log(ll.contains(10));
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);
ll.clear();
ll.log(); */