const isValidBST = function(root) {
    const inner = (node, ceiling, floor) => {
        if (node === null) {
            return true;
        }
        if (!(node.val < ceiling && node.val > floor)) {
            return false;
        }
        
        return inner(node.left, node.val, floor) && inner(node.right, ceiling, node.val);
    }
    
    return inner(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};

export default isValidBST;

