class Node {
    constructor(val) {
        this.val = val
        this.nodes = [];
    }
}

const findOrder = function(numCourses, prerequisites) {
    const result = [];
    const nodes = Array(numCourses);
    
    for (let i = 0; i < numCourses; i++) {
        nodes[i] = new Node(i);
    }
    
    for (const [a, b] of prerequisites) {
        nodes[a].nodes.push(nodes[b]);
    }
    
    const visited = new Set();
    const checking = new Set();
    
    const dfs = (node) => {
        if (checking.has(node)) {
            return false;
        }
        if (visited.has(node)) {
            return true;
        }
        
        checking.add(node);
        visited.add(node);
        for (const next of node.nodes) {
            if (dfs(next) === false) {
                return false;
            }
        }
        result.push(node.val);
        checking.delete(node);
        
        return true;
    }
    
    for (const node of nodes) {
        if (dfs(node) === false) {
            return [];
        }
    }
    
    return result;
};

export default findOrder;

