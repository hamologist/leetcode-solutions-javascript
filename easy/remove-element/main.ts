export function removeElement(nums: number[], val: number): number {
    let numsCount = nums.length;
    let k = 0;

    for (let i = 0; i < numsCount; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i -= 1;
            numsCount -= 1;
        }
    }

    return numsCount;
};
