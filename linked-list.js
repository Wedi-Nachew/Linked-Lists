// Create nodes with a value and a next property pointing towards the next node
const Node = (value = null, next = null) => {
    return { value, next };
};

const LinkedLists = () => {
    let head = null; //{value: 1, next: {value:2, next: {value:3, next: null}}}
    let count = 0;

    const gethead = () => head;

    return { gethead };
};

const list = LinkedLists();
