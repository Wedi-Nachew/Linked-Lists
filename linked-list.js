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
    //returns the first node in the list
    const head = () => headNode.value;
    //returns the last node in the list
    const tail = (head = headNode) => {
        if (!head.next) {
            return head.value;
        }
        return tail(head.next);
    };
    // inserts a new node with the provided value at the given index.
    const insertAt = (newItem, index, head = headNode) => {
        if (head === null) {
            return false;
        } else if (index === 1) {
            return prepend(newItem);
        } else if (index === 2) {
            return (head.next = Node(newItem, head.next));
        }
        return insertAt(newItem, --index, head.next);
    };
    // returns the node at the given index
    const at = (index, head = headNode) => {
        if (index === 1) {
            return head.value;
        }
        return at(--index, head.next);
    };
    // removes the last element from the list
    const pop = (head = headNode) => {
        if (head === null) {
            return null;
        } else if (!head.next.next) {
            count--;
            head.next = null;
        }
        return pop(head.next);
    };
    // returns true if the passed in value is in the list and otherwise returns false.
    const containes = (valueToBeChecked, head = headNode) => {
        if (head.value === valueToBeChecked) {
            return true;
        } else if (!head.next) {
            return false;
        }

        return containes(valueToBeChecked, head.next);
    };
    // returns the index of the node containing value, or null if not found.
    const find = (valueToBeChecked, head = headNode, index = 0) => {
        if (head.value === valueToBeChecked) {
            return index;
        } else if (head.next) {
            return find(valueToBeChecked, head.next, ++index);
        }
        return null;
    };

    return {
        append,
        prepend,
        size,
        head,
        tail,
        insertAt,
        at,
        pop,
        containes,
        find,
        toString,
        removeAt,
    };
};

const list = LinkedLists();
list.append(1);
list.append(3);
list.append(4);
list.append(5);
list.prepend(0);
list.insertAt(2, 3);

console.log(JSON.stringify(list.gethead(), null, 4));
console.log(list.containes(6));
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
