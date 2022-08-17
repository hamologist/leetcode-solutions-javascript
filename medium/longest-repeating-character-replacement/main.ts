function characterReplacement(s: string, k: number): number {
    const lookup = new Map();
    let left = 0;
    let result = 0;
    
    for (let right = 0; right < s.length; right++) {
        const current = lookup.get(s[right]) || 0;
        lookup.set(s[right], current + 1);
        
        let highestFreq = 0;
        for (const value of lookup.values()) {
            highestFreq = Math.max(highestFreq, value);
        }
        
        while ((right - left + 1) - highestFreq > k) {
            const currentLeft = lookup.get(s[left]);
            lookup.set(s[left], currentLeft - 1);
            left += 1;
            
            highestFreq = 0;
            for (const value of lookup.values()) {
                highestFreq = Math.max(highestFreq, value);
            }
        }
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};

export default characterReplacement;

