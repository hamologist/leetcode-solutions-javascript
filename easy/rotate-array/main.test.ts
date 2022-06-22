import rotate from './main';

const testCases: [number[], number, number[]][] = [
  [
    [1, 2, 3, 4, 5, 6, 7],
    3,
    [5, 6, 7, 1, 2, 3, 4],
  ],
  [
    [-1, -100, 3, 99],
    2,
    [3, 99, -1, -100],
  ],
];

describe('rotate-array', () => {
  testCases.forEach((testCase) => {
    it(`when array is ${testCase[0]} and k is ${testCase[1]} result is ${testCase[2]}`, () => {
      rotate(testCase[0], testCase[1]);
      expect(testCase[0])
        .toStrictEqual(testCase[2]);
    });
  });
});
