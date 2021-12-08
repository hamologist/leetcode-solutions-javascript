import countAndSay from './main';

const testCases: Array<[number, string]> = [
  [1, '1'],
  [4, '1211'],
];

describe('count-and-say', () => {
  test.each(testCases)(
    'countAndSay where n is %s and expects %s',
    (n, expected) => {
      expect(countAndSay(n)).toBe(expected);
    },
  );
});
