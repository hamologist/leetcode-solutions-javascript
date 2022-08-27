const rightSideView = function(root) {
    const result = [];
    let currentStack = [root];
    
    while (currentStack.length > 0) {
        const newStack = [];
        let found = false;
        
        for (const node of currentStack) {
            if (node === null) {
                continue;
            }
            if (found === false) {
                result.push(node.val);
                found = true;
            }
            
            newStack.push(node.right, node.left);
        }
        
        currentStack = newStack;
    }
    
    return result;
};

export default rightSideView;

