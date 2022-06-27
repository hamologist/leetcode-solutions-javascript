import { TreeNode } from "../../_shared/TreeNode";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const diff = (subP: TreeNode | null, subQ: TreeNode | null): boolean => {
        if (subP === null && subQ === null) {
            return true;
        }
        
        if ((subP !== null && subQ === null) || (subQ !== null && subP === null)) {
            return false;
        }
        
        if (subP!.val !== subQ!.val) {
            return false;
        }
        
        
        return diff(subP!.left, subQ!.left) && diff(subP!.right, subQ!.right);
    };
    
    return diff(p, q);
};
