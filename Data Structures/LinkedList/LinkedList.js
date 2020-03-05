const Node = require("./Node");

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addNode(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.size++;
            return this.head;
        }

        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        this.size++;
        return this.head;
    }

    getSize() {
        return this.size;
    }

    insertNodeAt(data, index) {

        let newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }

        let n = this.getNodeAt(index - 1);
        newNode.next = n.next;
        n.next = newNode;
        this.size++;
        return this.head;
    }

    getNodeAt(index) {
        if (index > this.size) {
            return new Error("The List doesn't have this index ..")
        }

        let count = 0;
        let newNode = this.head;

        while (newNode) {
            if (index === count) {
                return newNode;
            }
            newNode = newNode.next;
            count++;
        }
    }

    printList() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    deleteNodeAt(index) {
        let prevNode = this.getNodeAt(index - 1);
        prevNode.next = prevNode.next.next;
        this.size--;
        return this.head;
    }
}

module.exports = LinkedList;