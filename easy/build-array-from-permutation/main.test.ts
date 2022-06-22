import buildArray from './main';

const testCases: Array<[Array<number>, Array<number>]> = [
  [[0, 2, 1, 5, 3, 4], [0, 1, 2, 4, 5, 3]],
  [[5, 0, 1, 2, 3, 4], [4, 5, 0, 1, 2, 3]],
];

describe('build-array-from-permutation', () => {
  test.each(testCases)(
    'buildArray with nums of %s',
    (nums: number[], expected: number[]) => {
      expect(buildArray(nums))
        .toStrictEqual(expected);
    },
  );
});
