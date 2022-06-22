import maxIncreaseKeepingSkyline from './main';

const testCases: Array<[number[][], number]> = [
  [
    [
      [3, 0, 8, 4],
      [2, 4, 5, 7],
      [9, 2, 6, 3],
      [0, 3, 1, 0],
    ],
    35,
  ],
  [
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
  ],
];

describe('max-increase-to-keep-city-skyline', () => {
  test.each(testCases)(
    'maxIncreaseKeepingSkyline when grid is %j',
    (grid, expected) => {
      expect(maxIncreaseKeepingSkyline(grid))
        .toBe(expected);
    },
  );
});
