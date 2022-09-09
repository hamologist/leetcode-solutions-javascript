const findRedundantConnection = function(edges) {
    const parent = Array(edges.length + 1);
    const rank = Array(edges.length + 1).fill(1);
    
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i;
    }
    
    const find = (node) => {
        let p = parent[node];
        
        while (p !== parent[p]) {
            p = parent[p];
        }
        
        return p;
    }
    
    const union = (nodeOne, nodeTwo) => {
        const [p1, p2] = [find(nodeOne), find(nodeTwo)];
        
        if (p1 === p2) {
            return false;
        }
        
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        
        return true;
    }
    
    for (const [nodeOne, nodeTwo] of edges) {
        if (union(nodeOne, nodeTwo) === false) {
            return [nodeOne, nodeTwo];
        }
    }
};

export default findRedundantConnection;

