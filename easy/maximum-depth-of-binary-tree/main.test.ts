import maxDepth from './main';
import { TreeNode } from '../../_shared/TreeNode';

const testCases: Array<[string, TreeNode | null, number]> = [
  [
    '[3, 9, 20, null, null, 15, 7]',
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7),
      ),
    ),
    3,
  ],
  [
    '[1, null, 2]',
    new TreeNode(
      1,
      null,
      new TreeNode(2),
    ),
    2,
  ],
  ['[]', null, 0],
  ['[0]', new TreeNode(0), 1],
];

describe('maximum-depth-of-binary-tree', () => {
  test.each(testCases)(
    'maxDepth with a tree of %s',
    (description: string, testCase: TreeNode | null, expectedResult: number) => {
      expect(maxDepth(testCase))
        .toBe(expectedResult);
    },
  );
});
