function lengthOfLongestSubstring(s: string): number {
    const lookup = new Set();
    let left = 0;
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        while (lookup.has(s[i])) {
            lookup.delete(s[left]);
            left += 1;
        }

        lookup.add(s[i]);
        result = Math.max(result, i - left + 1)
    }
    
    return result;
};

export default lengthOfLongestSubstring;

