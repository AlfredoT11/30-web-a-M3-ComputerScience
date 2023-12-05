class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        // this.length = this.length - 1;
        // this.length -= 1;
        this.length--;

        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        // this.length = this.length + 1;
        // this.length += 1;
        this.length++;
        return this;
    }
}

const list = new LinkedList(6);

console.log('-------LISTA 1----------')
list.push(10);
list.push(25);
list.push(42);
list.printList();

console.log('-------LISTA 2----------')
list.pop();
list.printList();

console.log('-------LISTA 3----------')
list.unshift(89);
list.printList();