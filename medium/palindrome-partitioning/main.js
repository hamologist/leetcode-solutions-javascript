const partition = function(s) {
    const result = [];
    
    const isPalindrome = (word) => {
        for (let i = 0; i < ~~(word.length / 2); i++) {
            if (word[i] !== word[word.length - 1 - i]) {
                return false;
            }
        }
        
        return true;
    }
    
    const inner = (i, current) => {
        if (i >= s.length) {
            for (const word of current) {
                if (!isPalindrome(word)) {
                    return;
                }
            }
            
            result.push([...current]);
            return;
        }
        
        current.push(s[i]);
        inner(i + 1, current);
        
        current.pop();
        if (current.length !== 0) {
            current[current.length - 1] += s[i];
            inner(i + 1, current);
        }
    }
    inner(0, []);
    
    return result;
};

export default partition;

