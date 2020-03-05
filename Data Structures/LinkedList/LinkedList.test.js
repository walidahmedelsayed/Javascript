const LinkedList = require("./LinkedList");

describe('LinkedList Test', () => {

    test('Creating a LinkedList and adding a head node', () => {
        let list = new LinkedList();
        list.addNode("Walid");
        expect(list.head.data).toBe("Walid");
    })

    test('Creating a LinkedList and adding two nodes', () => {
        let list = new LinkedList();
        list.addNode("Walid");
        list.addNode("Ahmed");
        expect(list.head.next.data).toBe("Ahmed");
    })

    test("Check LinkedList Length", () => {
        let list = new LinkedList();
        list.addNode("Walid");
        list.addNode("Ahmed");
        list.addNode("Elsayed");
        list.addNode("Ahmed");

        expect(list.getSize()).toBe(4);
    })


    test("Insert Node at specific position", () => {
        let list = new LinkedList();
        list.addNode("Walid");
        list.addNode("Ahmed");
        list.addNode("Elsayed");
        list.addNode("Ahmed");
        list.insertNodeAt("test", 2);
        expect(list.getSize()).toBe(5);
    })

    test("Get Node from specific position", () => {
        let list = new LinkedList();
        list.addNode("Walid");
        list.addNode("Ahmed");
        list.addNode("Elsayed");
        list.addNode("Ahmed");
        let node = list.getNodeAt(2);
        expect(node.data).toBe("Elsayed");
    })

    test("Test inserting and getting node by index", () => {
        let list = new LinkedList();
        list.addNode("Walid");
        list.addNode("Ahmed");
        list.addNode("Elsayed");
        list.addNode("Ahmed");
        list.insertNodeAt("test", 2)
        let node = list.getNodeAt(2);
        expect(node.data).toBe("test");
    });

    test("Test Deleting node by index", () => {
        let list = new LinkedList();
        list.addNode("Walid");
        list.addNode("Ahmed");
        list.addNode("Elsayed");
        list.addNode("Ahmed");
        list.deleteNodeAt(2);

        let node1 = list.getNodeAt(1);
        let node2 = list.getNodeAt(2);

        expect(node1.data).toBe("Ahmed");
        expect(node2.data).toBe("Ahmed");
    });
})