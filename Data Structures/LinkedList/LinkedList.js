const Node = require("./Node");

class LinkedList {

    constructor() {
        this.head = null;
    }

    addNode(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        }

        let tail = this.head;

        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;

        return newNode;
    }
}

module.exports = LinkedList;