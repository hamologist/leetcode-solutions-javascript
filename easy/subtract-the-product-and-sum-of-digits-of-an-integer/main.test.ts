import subtractProductAndSum from './main';

const testCases: Array<[number, number]> = [
  [234, 15],
  [4421, 21],
];

describe('subtract-the-product-and-sum-of-digits-of-an-integer', () => {
  test.each(testCases)(
    'subtractProductAndSum where n is %s and expects %s',
    (n, expected) => {
      expect(subtractProductAndSum(n))
        .toBe(expected);
    },
  );
});
