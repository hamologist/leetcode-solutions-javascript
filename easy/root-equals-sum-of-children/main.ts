import { TreeNode } from '../../_shared/TreeNode';

const checkTree = (root: TreeNode): boolean => root.val === (root.left!.val + root.right!.val);

export default checkTree;
