import { TreeNode } from '../../_shared/TreeNode';

function invertTree(root: TreeNode | null): TreeNode | null {
    const inner = (node: TreeNode | null) => {
        if (node === null) {
            return;
        }
        
        [node.left, node.right] = [node.right, node.left];
        
        inner(node.left);
        inner(node.right);
    }
    inner(root);
    
    return root;
};

export default invertTree;

