const findTargetSumWays = function(nums, target) {
    const dp = new Map();
    
    const inner = (i, currentSum) => {
        if (i >= nums.length && currentSum !== 0) {
            return 0;
        }
        if (i >= nums.length && currentSum === 0) {
            return 1;
        }
        if (dp.has(`${i},${currentSum}`)) {
            return dp.get(`${i},${currentSum}`);
        }
        
        const result = inner(i + 1, currentSum + nums[i]) + inner(i + 1, currentSum - nums[i]);
        
        dp.set(`${i},${currentSum}`, result);
        return result;
    };
    
    return inner(0, target);
};

export default findTargetSumWays;

