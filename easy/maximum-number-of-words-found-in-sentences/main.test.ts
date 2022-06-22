import mostWordsFound from './main';

const testCases: [string[], number][] = [
  [
    [
      'alice and bob love leetcode',
      'i think so too',
      'this is great thanks very much',
    ],
    6,
  ],
  [
    [
      'please wait',
      'continue to fight',
      'continue to win',
    ],
    3,
  ],
];

describe('maximum-number-of-words-found-in-sentences', () => {
  testCases.forEach((testCase) => {
    const sentences = testCase[0];
    const expected = testCase[1];

    it(
      `should return "${expected}" when sentences are "${sentences}"`,
      () => {
        expect(mostWordsFound(sentences))
          .toBe(expected);
      },
    );
  });
});
