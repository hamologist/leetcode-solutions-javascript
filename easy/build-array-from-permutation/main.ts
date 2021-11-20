function buildArray(nums: number[]): number[] {
  const ans = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
}

export default buildArray;
