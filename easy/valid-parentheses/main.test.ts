import isValid from './main';

const testCases: Array<[string, boolean]> = [
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
];

describe('valid-parentheses', () => {
  test.each(testCases)(
    'isValid where s is "%s" and expects %s',
    (s, expected) => {
      expect(isValid(s))
        .toBe(expected);
    },
  );
});
