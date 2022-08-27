const kthSmallest = function(root, k) {
    let kCount = 0;
    let result;
    
    const inner = (node) => {
        if (node === null) {
            return;
        }
        
        if (kCount < k) {
            inner(node.left);
        }
        
        if (kCount < k) {
            kCount += 1;
            result = node.val;
        }
        
        if (kCount < k) {
            inner(node.right);
        }
    };
    inner(root);
    
    return result;
};

export default kthSmallest;

