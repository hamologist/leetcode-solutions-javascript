class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: Node | null): Node | null {
    const lookup = new Map();
    
    let current = head;
    while (current !== null) {
        const copy = new Node(current.val);
        lookup.set(current, copy);
        current = current.next;
    }
    
    current = head;
    while (current !== null) {
        const currentCopy = lookup.get(current);
        const nextCopy = lookup.get(current.next) || null;
        const randomCopy = lookup.get(current.random) || null;
        
        currentCopy.next = nextCopy;
        currentCopy.random = randomCopy;
        
        current = current.next;
    }
    
    return lookup.get(head);
};

export default copyRandomList;
