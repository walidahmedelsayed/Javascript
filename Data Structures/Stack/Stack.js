class Stack{

    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item);
    }

    pop() {
       return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    getLength() {
        return this.data.length;
    }
}


module.exports = Stack;