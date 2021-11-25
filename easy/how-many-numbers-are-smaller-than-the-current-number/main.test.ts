import smallerNumbersThanCurrent from './main';

const testCases: Array<[number[], number[]]> = [
  [[8, 1, 2, 2, 3], [4, 0, 1, 1, 3]],
  [[6, 5, 4, 8], [2, 1, 0, 3]],
  [[7, 7, 7, 7], [0, 0, 0, 0]],
];

describe('how-many-numbers-are-smaller-than-the-current-number', () => {
  test.each(testCases)(
    'smallerNumbersThanCurrent where nums is %s',
    (nums: number[], expected: number[]) => {
      expect(smallerNumbersThanCurrent(nums))
        .toStrictEqual(expected);
    },
  );
});
