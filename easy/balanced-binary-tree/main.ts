import { TreeNode } from "../../_shared/TreeNode";

export function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    let result = true;
    
    const inner = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        
        const left = inner(node.left);
        const right = inner(node.right);
        if (Math.abs(left - right) > 1) {
            result = false;
        }
        return 1 + Math.max(left, right);
    }
    
    inner(root);
    return result;
};

