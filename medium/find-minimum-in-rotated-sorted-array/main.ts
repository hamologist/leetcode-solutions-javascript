function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    let result = Number.MAX_VALUE;
    
    while (left <= right) {
        if (nums[left] < nums[right]) {
            result = Math.min(result, nums[left]);
        }
        
        const mid = left + Math.floor((right - left) / 2);
        result = Math.min(result, nums[mid]);
        
        if (nums[left] <= nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};

export default findMin;

