interface TopK {
  num: number,
  count: number,
}

function topKFrequent(nums: number[], k: number): number[] {
    const lookup = new Map<number, number>();
    const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    
    for (const num of nums) {
        const count = lookup.get(num) || 0;
        
        lookup.set(num, count + 1);
    }
    
    for (const [num, count] of lookup.entries()) {
        freq[count].push(num);
    }
    
    const result: number[] = [];
    for (let i = freq.length - 1; i >= 0; i--) {
        for (const num of freq[i]) {
            result.push(num);
            k -= 1;
            
            if (k == 0) {
                return result;
            }
        }
    }
    
    return result;
};

function compareTopK(a: TopK, b: TopK) {
  if (a.count < b.count) {
    return 1;
  }
  if (a.count > b.count) {
    return -1;
  }
  return 0;
}

export function topKFrequentNoSort(nums: number[], k: number): number[] {
  const countLookup = new Map<number, number>();
  const topK: Array<TopK> = [];

  for (const num of nums) {
    countLookup.set(num, (countLookup.get(num) || 0) + 1);
  }

  for (const num of countLookup.keys()) {
    topK.push({
      num,
      count: countLookup.get(num) || 0,
    });
  }

  topK.sort(compareTopK);

  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(topK[i].num);
  }
  return ans;
}

export function topKFrequentWithSort(nums: number[], k: number): number[] {
  nums.sort();
  const topK: Array<TopK> = [];
  let prev = nums[0];
  let count = 0;
  let num: number = 0;
  for (num of nums) {
    if (prev == num) {
      count++;
    } else {
      topK.push({
        num: prev,
        count,
      });
      prev = num;
      count = 1;
    }
  }
  topK.push({
    num,
    count,
  });

  topK.sort(compareTopK);

  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(topK[i].num);
  }
  return ans;
}

export default topKFrequent;

