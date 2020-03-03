const LinkedList = require("./LinkedList");

describe('LinkedList Test', () => {


    test('Creating a LinkedList with head node', () => {
        let list = new LinkedList();
        list.addNode("Walid");
        console.log(list);
        list.addNode("Ahmed");
        console.log(list);
    })

})