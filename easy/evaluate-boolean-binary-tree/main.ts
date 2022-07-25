import { TreeNode } from '../../_shared/TreeNode'

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function evaluateTree(root: TreeNode | null): boolean {
    if (root === null) {
        return false;
    }
    
    const inner = (root: TreeNode): boolean => {
        if (root.val === 0 || root.val === 1) {
            return root.val === 1;
        }
        
        const [left, right] = [inner(root.left!), inner(root.right!)];
        
        if (root.val === 2) {
            return left || right;                             
        } else {
            return left && right;                       
        }
    };

    return inner(root);
};

export default evaluateTree;

