function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[left] <= nums[mid]) {
            if (nums[mid] < target || nums[left] > target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] > target || nums[right] < target) {
                right = mid - 1;    
            } else {
                left = mid + 1;
            }
        }
    }
    
    return - 1;
};

export default search;

