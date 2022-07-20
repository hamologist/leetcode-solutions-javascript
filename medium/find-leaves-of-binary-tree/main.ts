import { TreeNode } from '../../_shared/TreeNode';

function findLeaves(root: TreeNode | null): number[][] {
    const result: number[][] = [];
    
    const findHeight = (node: TreeNode | null): number => {
        if (node === null) {
            return -1;
        }
        
        const leftHeight = findHeight(node.left);
        const rightHeight = findHeight(node.right);
        const height = Math.max(leftHeight, rightHeight) + 1;
        
        if (result.length < height + 1) {
            result.push([node.val]);
        } else {
            result[height].push(node.val);
        }
        
        return height;
    }
    
    findHeight(root);
    return result;
};

export default findLeaves;

