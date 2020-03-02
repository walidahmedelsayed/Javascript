const Queue = require("./Queue");

describe('Queue Test', () => {
    test("Elements inserted by the right order", () => {
        let q = new Queue();
        q.push(1);
        q.push(2);
        q.push(3);
        expect(q.peek()).toBe(1);
    });

    test("First element inserted should be first element removed", () => {
        let q = new Queue();
        q.push("Walid");
        q.push("Ahmed");
        q.push("Elsayed");
        expect(q.pop()).toBe("Walid");
    })

    test("Validate the Queue length after adding and removing elements", () => {
        let q = new Queue();
        q.push(1);
        q.push(2);
        q.push(3);
        q.push(4);
        q.push(6);
        q.pop();
        expect(q.getLength()).toBe(4);
    })
})