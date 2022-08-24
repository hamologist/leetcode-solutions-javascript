class Node {
    public key: number;
    public val: number;
    public next: Node | null;
    public prev: Node | null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    private head: Node | null;
    private tail: Node | null;
    private capacity: number;
    private lookup: Map<number, Node>;

    constructor(capacity: number) {
        this.head = null;
        this.tail = null;
        this.capacity = capacity;
        this.lookup = new Map();
    }

    enqueue(key: number, val: number): Node {
        const node = new Node(key, val);
        node.prev = this.tail;
        
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.lookup.set(key, node);
        
        return node;
    }

    dequeue(): Node {
        const head = this.head;
        if (head === null) {
            throw new Error('Called dequeue on empty queue');
        }
        this.lookup.delete(head.key);
        
        this.head = head.next;
        this.head!.prev = null;
        return head;
    }

    get(key: number): number {
        const node = this.lookup.get(key);
        
        if (node === undefined) {
            return -1;
        }
        
        if (node !== this.tail) {
            if (node.prev !== null) {
                node.prev.next = node.next;
            } else {
                this.head = this.head!.next;
            }
            
            node.next!.prev = node.prev;
            this.tail!.next = node;
            node.prev = this.tail;
            node.next = null;
            this.tail = node;
        }

        return node.val;
    }

    put(key: number, value: number): void {
        const current = this.lookup.get(key);

        if (current !== undefined) {
            this.get(key);
            current.val = value;
        } else {
            this.enqueue(key, value);   
        }
        
        if (this.lookup.size > this.capacity) {
            this.dequeue();
        }
    }
}

export default LRUCache;

