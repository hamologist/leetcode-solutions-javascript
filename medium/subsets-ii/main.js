const subsetsWithDup = function(nums) {
    const results = [];
    nums.sort((a, b) => a - b);
    
    const inner = (i, current) => {
        if (i >= nums.length) {
            results.push([...current]);    
            return;
        }
        
        current.push(nums[i]);
        inner(i + 1, current);
        
        current.pop();
        while (i + 1 <= nums.length && nums[i + 1] === nums[i]) {
            i += 1;
        }
        inner(i + 1, current);
    };
    inner(0, []);
    
    return results;
};

export default subsetsWithDup;

