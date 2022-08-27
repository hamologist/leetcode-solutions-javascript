export const buildTreeSimple = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    
    const root = new TreeNode(preorder[0]);
    const mid = inorder.findIndex((element) => element === preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    
    return root;
};

const buildTree = function(preorder, inorder) {
    const root = new TreeNode(preorder[0]);
    const inorderLookup = new Map();
    
    for (let i = 0; i < inorder.length; i++) {
        inorderLookup.set(inorder[i], i);
    }
    
    let next = 1;
    const inner = (node, left, right) => {
        if (next >= preorder.length) {
            return;
        }
        
        const pos = inorderLookup.get(node.val);
        let nextPos = inorderLookup.get(preorder[next]);
        if (nextPos < pos && nextPos >= left) {
            node.left = new TreeNode(preorder[next]);
            next += 1;
            inner(node.left, left, pos - 1);
        }
        if (next >= preorder.length) {
            return;
        }
        
        nextPos = inorderLookup.get(preorder[next]);
        if (nextPos > pos && nextPos <= right) {
            node.right = new TreeNode(preorder[next]);
            next += 1;
            inner(node.right, pos + 1, right);
        }
    }
    inner(root, 0, inorder.length - 1);
    
    return root;
};

export default buildTree;

