import { TreeNode } from '../../_shared/TreeNode';

function diameterOfBinaryTree(root: TreeNode | null): number {
    let result = 0;
    
    const inner = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        
        const left = inner(node.left);
        const right = inner(node.right);
        result = Math.max(result, left + right);
        return 1 + Math.max(left, right);
    }
    inner(root);
    
    return result;
};

export default diameterOfBinaryTree;

