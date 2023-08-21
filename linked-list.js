// Create nodes with a value and a next property pointing towards the next node
const Node = (value = null, next = null) => {
    return { value, next };
};

const LinkedLists = () => {
    let head = null; //{value: 1, next: {value:2, next: {value:3, next: null}}}
    let count = 0;

    //  adds a new node containing newItem to the end of the list
    const append = (newItem, headNode = null) => {
        if (headNode === null) {
            if (head === null) {
                count++;
                return (head = Node(newItem));
            } else {
                return append(newItem, head);
            }
        }
        count++;
        headNode.next = Node(newItem);
    };
    //adds a new node containing newItem to the start of the list
    const prepend = (newItem, headNode = null) => {
        if (headNode === null) {
            if (head === null) {
                count++;
                return (head = Node(newItem));
            } else {
                return prepend(newItem, head);
            }
        }
        count++;
        head = Node(newItem, head);
    };
    //returns the total number of nodes in the list
    const size = () => count;
    const gethead = () => head;

    return { append, prepend, gethead, size };
};

const list = LinkedLists();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.gethead());
console.log(list.getSize());
