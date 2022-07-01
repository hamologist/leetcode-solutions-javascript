function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) {
        return [-1, -1];
    }

    //Perform a binary search to find an occurrence of the target
    let [low, high] = [0, nums.length - 1];
    let current = Math.floor((low + high) / 2);
    while (nums[current] !== target) {
        if (low >= high) {
            return [-1, -1];
        }
        
        if (nums[current] > target) {
            high = current - 1;
        } else {
            low = current + 1;
        }
        current = Math.floor((low + high) / 2);
    }

    // Find where continuous target ends
    let [left, right] = [current, current];
    while (left !== 0 && nums[left - 1] === target) {
        left -= 1;
    }
    while (right !== nums.length - 1 && nums[right + 1] === target) {
        right += 1;
    }
    
    return [left, right];
};

export default searchRange;
