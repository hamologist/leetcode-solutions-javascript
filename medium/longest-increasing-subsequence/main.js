const lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1);
    let currentMax = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);   
            }
        }
        currentMax = Math.max(currentMax, dp[i]);
    }
    
    return currentMax;
};

export default lengthOfLIS;
