import { TreeNode } from '../../_shared/TreeNode';

function maxDepth(root: TreeNode | null): number {
  let ans = 0;

  (function inner(_root: TreeNode | null, current: number) {
    if (_root !== null) {
      inner(_root!.left, current + 1);
      inner(_root!.right, current + 1);
    } else {
      ans = Math.max(ans, current);
    }
  }(root, 0));

  return ans;
}

export default maxDepth;
