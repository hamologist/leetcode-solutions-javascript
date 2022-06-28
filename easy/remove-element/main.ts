function removeElement(nums: number[], val: number): number {
    let numsCount = nums.length;

    for (let i = 0; i < numsCount; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i -= 1;
            numsCount -= 1;
        }
    }

    return numsCount;
};

function removeElementUsingTwoPointers(nums: number[], val: number): number {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};

export default removeElement;
