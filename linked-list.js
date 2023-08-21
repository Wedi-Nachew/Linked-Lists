// Create nodes with a value and a next property pointing towards the next node
const Node = (value = null, next = null) => {
    return { value, next };
};

const LinkedLists = () => {
    let headNode = null; //{value: 1, next: {value:2, next: {value:3, next: null}}}
    let count = 0;

    //  adds a new node containing newItem to the end of the list
    const append = (newItem, head = headNode) => {
        if (head === null) {
            count++;
            return (headNode = Node(newItem));
        } else if (head.next) {
            return append(newItem, head.next);
        }
        count++;
        head.next = Node(newItem);
    };
    //adds a new node containing newItem to the start of the list
    const prepend = (newItem, head = headNode) => {
        if (head === null) {
            count++;
            return (headNode = Node(newItem));
        }

        count++;
        headNode = Node(newItem, head);
    };
    //returns the total number of nodes in the list
    const size = () => count;
    const head = () => headNode.value;
    const tail = (head = headNode) => {
        if (!head.next) {
            return head.value;
        }
        return tail(head.next);
    };
    const insertAt = (newItem, index, head = headNode) => {
        if (index === 1) {
            count++;
            return (head.next = Node(newItem, head.next));
        }
        insertAt(newItem, --index, head.next);
    };
    // const

    const gethead = () => headNode;

    return { append, prepend, gethead, size, head, tail, insertAt };
};

const list = LinkedLists();
list.append(1);
list.append(3);
list.append(4);
list.append(5);
list.prepend(0);
list.insertAt(2, 2);
console.log(JSON.stringify(list.gethead(), null, 4));
console.log(list.size());
console.log(list.head());
console.log(list.tail());
