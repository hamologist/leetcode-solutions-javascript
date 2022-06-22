import { TreeNode } from '../../_shared/TreeNode';
import rangeSumBST from './main';

const testCases: Array<[TreeNode, number, number, number]> = [
  [
    new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(3),
        new TreeNode(7),
      ),
      new TreeNode(
        15,
        null,
        new TreeNode(18),
      ),
    ),
    7,
    15,
    32,
  ],
  [
    new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(
          3,
          new TreeNode(1),
        ),
        new TreeNode(
          7,
          new TreeNode(6),
        ),
      ),
      new TreeNode(
        15,
        new TreeNode(13),
        new TreeNode(18),
      ),
    ),
    6,
    10,
    23,
  ],
];

describe('range-sum-of-bst', () => {
  testCases.forEach((testCase) => {
    const [treeNode, low, high, expected] = testCase;
    it(`should return ${expected} when tree is ${treeNode}`, () => {
      expect(rangeSumBST(treeNode, low, high))
        .toBe(expected);
    });
  });
});
