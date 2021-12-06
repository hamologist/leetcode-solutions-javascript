import restoreString from './main';

const testCases: Array<[string, number[], string]> = [
  ['codeleet', [4, 5, 6, 7, 0, 2, 1, 3], 'leetcode'],
  ['abc', [0, 1, 2], 'abc'],
  ['aiohn', [3, 1, 4, 2, 0], 'nihao'],
  ['aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5], 'arigatou'],
  ['art', [1, 0, 2], 'rat'],
];

describe('shuffle-string', () => {
  test.each(testCases)(
    'restoreString where s is "%s", indices is %s and expected is %s',
    (s: string, indices: number[], expected: string) => {
      expect(restoreString(s, indices)).toBe(expected);
    },
  );
});
