function rotate(nums: number[], k: number): void {
  const originalNums = [...nums];
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = originalNums[i];
  }
}

export default rotate;
