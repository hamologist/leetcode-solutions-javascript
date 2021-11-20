function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    profit += Math.max(0, prices[i + 1] - prices[i]);
  }

  return profit;
}

export default maxProfit;
