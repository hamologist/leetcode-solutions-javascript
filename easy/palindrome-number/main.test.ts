import isPalindrome, { isPalindromeWithForLoop } from './main';

const testCases: Array<[number, boolean]> = [
  [121, true],
  [-121, false],
  [10, false],
  [-101, false],
];

describe('is-palindrome', () => {
  test.each(testCases)(
    'isPalindrome where x is %s',
    (x: number, expected: boolean) => {
      expect(isPalindrome(x)).toBe(expected);
    },
  );

  test.each(testCases)(
    'isPalindromeWithForLoop where x is %s',
    (x: number, expected: boolean) => {
      expect(isPalindromeWithForLoop(x)).toBe(expected);
    },
  );
});
