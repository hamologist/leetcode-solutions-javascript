function threeSum(nums: number[]): number[][] {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        let checkNum = nums[i];
        
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;    
        }
        
        let [left, right] = [i + 1, nums.length - 1];
        while (left < right) {
            const sum = checkNum + nums[left] + nums[right];
            if (sum === 0) {
                const currentLeft = nums[left];
                const currentRight = nums[right];
                result.push([checkNum, currentLeft, currentRight]);
                
                while (nums[left] === currentLeft && left < right) {
                    left += 1;    
                }
                
                while (nums[right] === currentRight && right > left) {
                    right -= 1;    
                }
            } else if (sum > 0) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }
    
    return result;
};

export default threeSum;

