import { TreeNode } from '../../_shared/TreeNode';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }
    
    const inner = (current: TreeNode, currentSum: number): boolean => {
        currentSum += current.val
        if (current.left === null && current.right === null && currentSum === targetSum) {
            return true;
        }
        
        let left = false;
        if (current.left !== null) {
            left = inner(current.left, currentSum);
        }
        
        let right = false;
        if (current.right !== null && left === false) {
            right = inner(current.right, currentSum);
        }
        
        return left || right;
    }
    
    return inner(root, 0);
}

export default hasPathSum;
