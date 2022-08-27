const levelOrder = function(root) {
    const result = [];
    
    const inner = (node, level) => {
        if (node === null) {
            return;
        }
        
        while (result.length < level) {
            result.push([]);
        }
        result[level - 1].push(node.val);
        
        inner(node.left, level + 1);
        inner(node.right, level + 1);
    }
    inner(root, 1);
    
    return result;
};

export const levelOrderBFS = function(root) {
    const result = [];
    let currentStack = [root];
    
    while (currentStack.length > 0) {
        const newStack = [];
        const level = [];
        for (const node of currentStack) {
            if (node === null) {
                continue;
            }
            
            level.push(node.val);
            newStack.push(node.left);
            newStack.push(node.right);
        }
        if (level.length > 0) {
            result.push(level);
        }
        
        currentStack = newStack;
    }
    
    return result;
};

export default levelOrder;
