import myPow from './main';

const testCases: [number, number, number][] = [
  [2.00000, 10, 1024.00000],
  [2.10000, 3, 9.26100],
  [2.00000, -2, 0.25000],
];

describe('powx-n', () => {
  testCases.forEach((testCase) => {
    it(`For x = ${testCase[0]}, n = ${testCase[1]}, result = ${testCase[2]}`, () => {
      expect(myPow(testCase[0], testCase[1]))
        .toBeCloseTo(testCase[2]);
    });
  });
});
