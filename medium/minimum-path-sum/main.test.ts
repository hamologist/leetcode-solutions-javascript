import minPathSum from './main';

const testCases: [number[][], number][] = [
  [
    [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ],
    7,
  ],
  [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    12,
  ],
];

describe('minimum-path-sum', () => {
  testCases.forEach((testCase) => {
    it(`for grid: ${testCase[0]}, min is ${testCase[1]}`, () => {
      expect(minPathSum(testCase[0]))
        .toStrictEqual(testCase[1]);
    });
  });
});
