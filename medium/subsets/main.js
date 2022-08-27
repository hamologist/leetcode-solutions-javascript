const subsets = function(nums) {
    const result = [];
    const current = [];
    
    const inner = (i) => {
        if (i >= nums.length) {
            result.push(current.slice());
            return;
        }
        
        current.push(nums[i]);
        inner(i+1);
        
        current.pop();
        inner(i+1);
    }
    inner(0);
    
    return result;
};

export const subsetsPassingSlices = function(nums) {
    const result = [[]]
    
    const inner = (current, slice) => {
        for (let i = 0; i < slice.length; i++) {
            const next = current.slice();
            next.push(slice[i]);
            result.push(next);
            
            inner(next, slice.slice(i + 1));
        }
    }
    inner([], nums);
    
    return result;
};

export default subsets;

