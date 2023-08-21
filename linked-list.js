// Create nodes with a value and a next property pointing towards the next node
const Node = (value = null, next = null) => {
    return { value, next };
};

const LinkedLists = () => {
    let headNode = null; //{value: 1, next: {value:2, next: {value:3, next: null}}}
    let count = 0;

    //  adds a new node containing newItem to the end of the list
    const append = (newItem, head = null) => {
        if (head === null) {
            if (headNode === null) {
                count++;
                return (headNode = Node(newItem));
            } else {
                return append(newItem, headNode);
            }
        }
        count++;
        head.next = Node(newItem);
    };
    //adds a new node containing newItem to the start of the list
    const prepend = (newItem, head = null) => {
        if (head === null) {
            if (headNode === null) {
                count++;
                return (headNode = Node(newItem));
            } else {
                return prepend(newItem, headNode);
            }
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

    const gethead = () => headNode;

    return { append, prepend, gethead, size, head, tail };
};

const list = LinkedLists();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.gethead());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
