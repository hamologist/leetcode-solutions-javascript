const maxProfit = function(prices) {
    const dp = new Map();
    
    const inner = (i, buying) => {
        if (i >= prices.length) {
            return 0;
        }
        if (dp.has(`${i},${buying}`)) {
            return dp.get(`${i},${buying}`);
        }
        
        let result;
        if (buying) {
            result = inner(i + 1, false) - prices[i];
            result = Math.max(result, inner(i + 1, true));
        } else {
            result = prices[i] + inner(i + 2, true);
            result = Math.max(result, inner(i + 1, false));
        }
        
        dp.set(`${i},${buying}`, result);
        return result;
    };
    
    return inner(0, true);
};

export default maxProfit;

