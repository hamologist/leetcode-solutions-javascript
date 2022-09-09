const longestPalindrome = function(s) {
    let result = "";
    
    const expandAroundCenter = (left, right) => {
        if (right >= s.length || s[left] !== s[right]) {
            return "";
        }
        
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        
        return s.slice(left + 1, right);
    };
    
        
    for (let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(i, i);
        const even = expandAroundCenter(i, i + 1);
        
        if (odd.length >= even.length && odd.length > result.length) {
            result = odd;
        } else if (even.length > odd.length && even.length > result.length) {
            result = even;
        }
    }
    return result;
};

export default longestPalindrome;

