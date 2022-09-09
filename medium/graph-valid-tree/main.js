const validTree = function(n, edges) {
    const parent = Array(n);
    const rank = Array(n).fill(1);
    
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i;
    }
    
    const find = (node) => {
        let p = parent[node];
        
        while (p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        parent[node] = p;
        
        return p;
    }
    
    const union = (nodeOne, nodeTwo) => {
        const [p1, p2] = [find(nodeOne), find(nodeTwo)];
        
        if (p1 === p2) {
            return false;
        }
        
        if (rank[p1] > rank[p2]) {
            rank[p1] += rank[p2];
            parent[p2] = parent[p1];
        } else {
            rank[p2] += rank[p1];
            parent[p1] = parent[p2];
        }
        
        return true;
    }
    
    for (const [nodeOne, nodeTwo] of edges) {
        if (union(nodeOne, nodeTwo) === false) {
            return false;
        }
    }
    for (let i = 0; i < n; i++) {
        find(i);
    }
    
    return (new Set(parent)).size === 1;
};

export default validTree;
