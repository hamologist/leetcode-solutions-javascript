import { TreeNode } from '../../_shared/TreeNode';

function sumEvenGrandparent(root: TreeNode | null): number {
  let ans: number = 0;

  (function inner(_root: TreeNode | null, parent: number | null, grandParent: number | null) {
    if (_root === null) {
      return;
    }

    if (grandParent !== null && grandParent % 2 === 0) {
      ans += _root!.val;
    }

    inner(_root!.left, _root!.val, parent);
    inner(_root!.right, _root!.val, parent);
  }(root, null, null));

  return ans;
}

export default sumEvenGrandparent;
