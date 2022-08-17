function maxProfit(prices: number[]): number {
    let minBuy = Number.MAX_VALUE;
    let bestProfit = 0;
    
    for (const price of prices) {
        minBuy = Math.min(price, minBuy);
        bestProfit = Math.max(price - minBuy, bestProfit);
    }
    
    return bestProfit;
};

export default maxProfit;

