import containsDuplicate from './main';

const testCases: [number[], boolean][] = [
  [[1, 2, 3, 1], true],
  [[1, 2, 3, 4], false],
  [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
];

describe('contains-duplicates', () => {
  testCases.forEach((testCase) => {
    it(`when nums = ${testCase[0]}, should return ${testCase[1]}`, () => {
      expect(containsDuplicate(testCase[0]))
        .toStrictEqual(testCase[1]);
    });
  });
});
