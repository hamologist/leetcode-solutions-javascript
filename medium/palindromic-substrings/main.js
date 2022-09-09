const countSubstrings = function(s) {
    const expandAroundCenter = (left, right) => {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count += 1;
            left -= 1;
            right += 1;
        }
        
        return count;
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result += expandAroundCenter(i, i);
        result += expandAroundCenter(i, i + 1);
    }
    
    return result;
};

export default countSubstrings;

