const goodNodes = function(root) {
    let result = 0;
    
    const inner = (node, currentMax) => {
        if (node === null) {
            return;
        }
        
        if (node.val >= currentMax) {
            result += 1;
        }
        
        currentMax = Math.max(currentMax, node.val);
        inner(node.left, currentMax);
        inner(node.right, currentMax)
    }
    inner(root, root.val);
    
    return result;
};

export default goodNodes;

