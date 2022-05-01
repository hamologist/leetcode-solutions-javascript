import { TreeNode } from '../../_shared/TreeNode';
import checkTree from './main';

const testCases: Array<[TreeNode, boolean]> = [
  [
    new TreeNode(
      10,
      new TreeNode(4),
      new TreeNode(6),
    ),
    true,
  ],
  [
    new TreeNode(
      5,
      new TreeNode(3),
      new TreeNode(1),
    ),
    false,
  ],
];

describe('root-equals-sum-of-children', () => {
  testCases.forEach((testCase) => {
    const tree = testCase[0];
    const root = tree.val;
    const left = tree.left?.val!;
    const right = tree.right?.val!;
    const expected = testCase[1];
    it(
      `should return ${expected} when root is ${root}, left is ${left}, and right is ${right}`,
      () => {
        expect(checkTree(tree)).toBe(expected);
      },
    );
  });
});
