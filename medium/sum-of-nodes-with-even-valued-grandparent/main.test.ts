import { TreeNode } from '../../_shared/TreeNode';
import sumEvenGrandparent from './main';

const testCases: Array<[TreeNode | null, number]> = [
  [
    new TreeNode(
      6,
      new TreeNode(
        7,
        new TreeNode(
          2,
          new TreeNode(
            9,
            null,
            null,
          ),
          null,
        ),
        new TreeNode(
          7,
          new TreeNode(
            1,
            null,
            null,
          ),
          new TreeNode(
            4,
            null,
            null,
          ),
        ),
      ),
      new TreeNode(
        8,
        new TreeNode(
          1,
          null,
          null,
        ),
        new TreeNode(
          3,
          null,
          new TreeNode(
            5,
            null,
            null,
          ),
        ),
      ),
    ),
    18,
  ],
  [
    new TreeNode(1),
    0,
  ],
];

describe('sum-of-nodes-with-even-valued-grandparent', () => {
  test.each(testCases)(
    'sumEvenGrandparent where root is %s',
    (root, expected) => {
      expect(sumEvenGrandparent(root))
        .toBe(expected);
    },
  );
});
