const permute = function(nums) {
    const result = [];
    
    const inner = (current, remaining) => {
        if (remaining.length === 0) {
            result.push(current);
        }
        
        for (let i = 0; i < remaining.length; i++) {
            inner([...current, remaining[i]], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
        }
    }
    inner([], nums);
    
    return result;
};

export default permute;

