// Create nodes with a value and a next property pointing towards the next node
const Node = (value = null, next = null) => {
    return { value, next };
};

const LinkedLists = () => {
    let head = null; //{value: 1, next: {value:2, next: {value:3, next: null}}}
    let count = 0;
    // appends a new value to the end of the link
    const append = (newItem, headNode = null) => {
        if (headNode === null) {
            if (head === null) {
                return (head = Node(newItem));
            } else {
                return append(newItem, head);
            }
        }
        headNode.next = Node(newItem);
    };
    const gethead = () => head;

    return { append, gethead };
};

const list = LinkedLists();
list.append(1);
list.append(2);
list.append(3);
console.log(list.gethead());
