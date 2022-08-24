function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];
    
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        if (slow === fast) {
            break;
        }
    }
    
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow
};

export function findDuplicateWithLookup(nums: number[]): number {
  const lookup = new Map<number, boolean>();
  let dupe = 0;
  for (const num of nums) {
    const count = lookup.get(num) || false;

    if (count) {
      dupe = num;
      break;
    }
    lookup.set(num, true);
  }

  return dupe;
}

export default findDuplicate;

