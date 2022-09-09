const wordBreak = function(s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    dp[s.length] = true;
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) == word) {
                dp[i] = dp[i + word.length];
            }
            if (dp[i] === true) {
                break;
            }
        }
    }
    
    return dp[0];
};

export const wordBreakWithRecursion = function(s, wordDict) {
    const lookup = new Set(wordDict);
    const dp = new Set();
    
    const inner = (begin) => {
        if (begin === s.length) {
            return true;
        }
        if (dp.has(begin)) {
            return false;
        }
        
        for (let i = begin; i < s.length; i++) {
            if (lookup.has(s.slice(begin, i + 1))) {
                if (inner(i + 1) === true) {
                    return true;
                } 
            }
        }
        
        dp.add(begin);
        return false;
    }
    
    return inner(0)
};

export default wordBreak;

