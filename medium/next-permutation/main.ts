function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    const reversed = nums.slice(i+1).reverse();
    nums.splice(i+1, reversed.length, ...reversed);
}

export default nextPermutation;
