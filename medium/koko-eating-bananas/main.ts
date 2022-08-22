function minEatingSpeed(piles: number[], h: number): number {
    let low = 1;
    
    let high = 1;
    for (const bananas of piles) {
        high = Math.max(high, bananas);
    }
    
    let result = Number.MAX_VALUE;
    
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        let currentH = 0;
        for (const bananas of piles) {
            currentH += Math.ceil(bananas / mid);
        }
        
        if (currentH <= h) {
            result = Math.min(result, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return result;
};

export default minEatingSpeed;

