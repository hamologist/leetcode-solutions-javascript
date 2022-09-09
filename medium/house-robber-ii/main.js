const rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    const inner = (left, right) => {
        let [one, two] = [0, 0];
        for (let i = left; i < right; i++) {
            const temp = Math.max(two, nums[i] + one);
            one = two;
            two = temp;
        }
        
        return two;
    }
    
    return Math.max(inner(0, nums.length - 1), inner(1, nums.length));
};

export default rob;

