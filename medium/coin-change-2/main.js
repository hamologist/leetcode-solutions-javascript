const change = function(amount, coins) {
    const results = Array(amount + 1).fill(0);
    results[0] = 1;
    
    for (const coin of coins) {
        for (let i = coin; i < amount + 1; i++) {
            results[i] += results[i - coin];
        }
    }
    
    return results[amount];
};

export default change;

