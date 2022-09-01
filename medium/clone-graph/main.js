const cloneGraph = function(node) {
    if (node === null) {
        return null;
    }
    
    const lookup = new Map();
    const inner = (current) => {
        if (lookup.has(current)) {
            return;
        }
        
        const clone = new Node(current.val);
        lookup.set(current, clone);
        for (const next of current.neighbors) {
            inner(next);
            clone.neighbors.push(lookup.get(next));
        }
    };
    inner(node);
    
    return lookup.get(node);
};

export default cloneGraph;

