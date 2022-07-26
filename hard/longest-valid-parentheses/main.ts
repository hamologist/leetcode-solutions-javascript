function longestValidParentheses(s: string): number {
    let longest = 0;
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left += 1;
        } else {
            right += 1;
            
            if (right > left) {
                left = 0;
                right = 0;
            }
        }
        
        if (left === right) {
            longest = Math.max(longest, left + right);
        }
    }
    
    left = 0;
    right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            left += 1;
            
            if (left > right) {
                left = 0;
                right = 0;
            }
        } else {
            right += 1;
        }
        
        if (left === right) {
            longest = Math.max(longest, left + right);
        }
    }
    
    return longest;
};

export default longestValidParentheses;

