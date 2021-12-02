function targetIndices(nums: number[], target: number): number[] {
  const sorted = [...nums].sort((a, b) => a - b);
  const ans: number[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    if (current === target) {
      ans.push(i);
    } else if (current > target) {
      break;
    }
  }

  return ans;
}

export default targetIndices;
