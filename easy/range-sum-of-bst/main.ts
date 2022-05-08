import { TreeNode } from '../../_shared/TreeNode';

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
  if (root === null) {
    return 0;
  }

  let rangeSum = 0;
  const inner = (node: TreeNode) => {
    const current = node.val;
    if (node.left !== null && current > low) {
      inner(node.left);
    }
    if (node.right !== null && current < high) {
      inner(node.right);
    }
    if (current >= low && current <= high) {
      rangeSum += current;
    }
  };
  inner(root);

  return rangeSum;
};

export default rangeSumBST;
