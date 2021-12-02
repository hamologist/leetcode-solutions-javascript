import targetIndices from './main';

const testCases: Array<[number[], number, number[]]> = [
  [[1, 2, 5, 2, 3], 2, [1, 2]],
  [[1, 2, 5, 2, 3], 3, [3]],
  [[1, 2, 5, 2, 3], 5, [4]],
  [[1, 2, 5, 2, 3], 4, []],
  [
    [48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38],
    6,
    [1],
  ],
];

describe('find-target-indices-after-sorting-array', () => {
  test.each(testCases)(
    'targetIndices where nums is "%s", target is "%s"',
    (nums, target, expected) => {
      expect(targetIndices(nums, target)).toStrictEqual(expected);
    },
  );
});
