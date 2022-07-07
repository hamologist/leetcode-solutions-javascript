function threeSumClosest(nums: number[], target: number): number {
    let diff = Number.MAX_VALUE;
    nums.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        
        if (a < b) {
            return -1;
        }
        
        return 0;
    });
    
    for (let i = 0; i < nums.length; i++) {
        let [lo, hi] = [i + 1, nums.length - 1];
        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
                
                if (diff === 0) {
                    break;
                }
            }
            if (sum < target) {
                lo += 1;
            } else {
                hi -= 1;
            }
        }
        if (diff === 0) {
            break;
        }
    }
    
    return target - diff;
}

export default threeSumClosest;
