const canFinish = function(numCourses, prerequisites) {
    const graph = Array(numCourses);
    
    for (let i = 0; i < numCourses; i++) {
        graph[i] = new Node(i);
    }
    for (const [a, b] of prerequisites) {
        graph[b].edges.push(graph[a]);
    }
    
    const dfs = (node, visited, check) => {
        if (check.has(node)) {
            return false;
        }
        if (visited.has(node)) {
            return true;
        }
        
        visited.add(node);
        check.add(node);
        for (const edge of node.edges) {
            if (dfs(edge, visited, check) === false) {
                return false;
            }
        }
        check.delete(node);
        
        return true;
    }
    
    const visisted = new Set();
    for (const node of graph) {
        if (dfs(node, visisted, new Set()) === false) {
            return false;
        }
    }
    
    return true;
};

export default canFinish;
