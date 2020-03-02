const Stack = require("./Stack");

describe('Stack Test', () => {
    test("Elements inserted by the right order", () => {
        let s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        expect(s.peek()).toBe(3);
    });

    test("Last element inserted should be first element removed", () => {
        let s = new Stack();
        s.push("Walid");
        s.push("Ahmed");
        s.push("Elsayed");
        expect(s.pop()).toBe("Elsayed");
    })

    test("Validate the stack length after adding and removing elements", () => {
        let s = new Stack();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);
        s.pop();
        expect(s.getLength()).toBe(4);
    })
})