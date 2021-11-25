import numIdenticalPairs from './main';

const testCases: Array<[Array<number>, number]> = [
  [[1, 2, 3, 1, 1, 3], 4],
  [[1, 1, 1, 1], 6],
  [[1, 2, 3], 0],
];

describe('number-of-good-pairs', () => {
  test.each(testCases)(
    'numIdenticalPairs where nums is %s',
    (nums: number[], expected: number) => {
      expect(numIdenticalPairs(nums)).toBe(expected);
    },
  );
});
