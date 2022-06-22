import { TreeNode } from '../../_shared/TreeNode';
import getTargetCopy from './main';

const treeNodeOne = new TreeNode(
  7,
  new TreeNode(
    4,
    null,
    null,
  ),
  new TreeNode(
    3,
    new TreeNode(6),
    new TreeNode(19),
  ),
);

const treeNodeOneDupe = new TreeNode(
  7,
  new TreeNode(
    4,
    null,
    null,
  ),
  new TreeNode(
    3,
    new TreeNode(6),
    new TreeNode(19),
  ),
);

const testCases: Array<[TreeNode | null, TreeNode | null, TreeNode | null]> = [
  [treeNodeOne, treeNodeOneDupe, treeNodeOne.right],
];

describe('find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree', () => {
  test.each(testCases)(
    'getTargetCopy where original is %s, clone is %s, and target is %s',
    (original, cloned, target) => {
      expect(getTargetCopy(original, cloned, target))
        .toStrictEqual(target);
    },
  );
});
