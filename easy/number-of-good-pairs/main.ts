function numIdenticalPairs(nums: number[]): number {
  const lookup: Map<number, number> = new Map();
  let ans = 0;

  for (const num of nums) {
    if (lookup.has(num)) {
      lookup.set(num, lookup.get(num)! + 1);
    } else {
      lookup.set(num, 1);
    }
  }

  for (const count of lookup.values()) {
    ans += (((count - 1) * count) / 2);
  }

  return ans;
}

export default numIdenticalPairs;
