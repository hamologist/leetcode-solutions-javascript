function smallerNumbersThanCurrent(nums: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      count += nums[i] > nums[j] ? 1 : 0;
    }
    ans.push(count);
  }

  return ans;
}

export default smallerNumbersThanCurrent;
