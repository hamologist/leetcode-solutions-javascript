import reverse from './main';

const testCases: Array<[number, number]> = [
  [123, 321],
  [-123, -321],
  [120, 21],
  [0, 0],
  [1534236469, 0],
];

describe('reverse-integer', () => {
  test.each(testCases)(
    'reverse where x is %i',
    (x: number, expected: number) => {
      expect(reverse(x)).toBe(expected);
    },
  );
});
