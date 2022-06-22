import interpret from './main';

const testCases: Array<[string, string]> = [
  ['G()(al)', 'Goal'],
  ['G()()()()(al)', 'Gooooal'],
  ['(al)G(al)()()G', 'alGalooG'],
];

describe('goal-parser-interpretation', () => {
  testCases.forEach((testCase) => {
    const command = testCase[0];
    const expected = testCase[1];

    it(`should return ${expected} when command is ${command}`, () => {
      expect(interpret(command))
        .toBe(expected);
    });
  });
});
