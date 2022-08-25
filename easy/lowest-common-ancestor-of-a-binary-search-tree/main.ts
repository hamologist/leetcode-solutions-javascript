import { TreeNode } from '../../_shared/TreeNode';


function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let result = root;

    while (result !== null) {
        if (result.val < p!.val && result.val < q!.val) {
            result = result.right;
        } else if (result.val > p!.val && result.val > q!.val) {
            result = result.left;
        } else {
            break;
        }
    }

    return root;
};

export function lowestCommonAncestorOriginal(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const contains = (node: TreeNode | null, target: TreeNode): boolean => {
        if (node === null) {
            return false;
        }
        
        if (node === target) {
            return true;
        }
        
        return contains(node.left, target) || contains(node.right, target);
    }
    
    let lowest: [TreeNode, number] = [root!, 1];
    const traverse = (node: TreeNode | null, depth: number) => {
        const check = contains(node, p!) && contains(node, q!);
        
        if (check === false) {
            return;
        } else if (lowest[1] < depth) {
            lowest = [node!, depth];
        }
        
        traverse(node!.left, depth + 1);
        traverse(node!.right, depth + 1);
    }
    traverse(root!.left, 2);
    traverse(root!.right, 2);
    
    return lowest[0];
};

export default lowestCommonAncestor;
