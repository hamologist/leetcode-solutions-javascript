import { TreeNode } from '../../_shared/TreeNode';

function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0;
    
    const inner = (node: TreeNode | null, depth: number) => {
        if (node === null) {
            return;
        }
        
        maxDepth = Math.max(maxDepth, depth);
        
        inner(node.left, depth + 1);
        inner(node.right, depth + 1);
    }
    inner(root, 1);
    
    return maxDepth;
}

export default maxDepth;
