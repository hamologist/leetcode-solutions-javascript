import plusOne from './main';

const testCases: Array<[Array<number>, Array<number>]> = [
  [[1, 2, 3], [1, 2, 4]],
  [[4, 3, 2, 1], [4, 3, 2, 2]],
  [[0], [1]],
  [[9], [1, 0]],
  [
    [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
    [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4],
  ],
];

describe('plus-one', () => {
  test.each(testCases)(
    'plusOne where digits is %s',
    (digits: number[], expected: number[]) => {
      expect(plusOne(digits))
        .toStrictEqual(expected);
    },
  );
});
