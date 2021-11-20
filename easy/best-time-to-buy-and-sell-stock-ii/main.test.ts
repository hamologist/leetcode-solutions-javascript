import maxProfit from './main';

const testCases: Array<[Array<number>, number]> = [
  [[7, 1, 5, 3, 6, 4], 7],
  [[1, 2, 3, 4, 5], 4],
  [[7, 6, 4, 3, 1], 0],
];

describe('best-time-to-buy-and-sell-stock-ii', () => {
  test.each(testCases)(
    'maxProfit with prices of %s',
    (prices: Array<number>, expected: number) => {
      expect(maxProfit(prices)).toBe(expected);
    },
  );
});
