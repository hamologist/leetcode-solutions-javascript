const letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    
    const result = [];
    const lookup = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]);
    
    const inner = (i, current) => {
        if (i >= digits.length) {
            result.push(current);
            return;
        }
        
        const chars = lookup.get(digits[i]);
        for (const char of chars) {
            inner(i + 1, current + char);
        }
    };
    inner(0, "");
    
    return result;
};

export default letterCombinations;

