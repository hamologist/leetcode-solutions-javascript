const canPartition = function(nums) {
    let dp = new Set();
    let target = nums.reduce((a, b) => a + b, 0);
    
    if (target % 2 !== 0) {
        return false;
    }
    target = target / 2;
    
    for (const num of nums) {
        const nextDp = new Set();
        
        for (const dpNum of dp) {
            nextDp.add(num + dpNum);
            nextDp.add(dpNum);
        }
        nextDp.add(num);
        
        if (nextDp.has(target)) {
            return true;
        }
        dp = nextDp;
    }
    
    console.log(dp);
    return false;
};

export default canPartition;

