function twoSum(nums: number[], target: number): number[] | null {
    const lookup = new Map<number, number>();
    
    for (const [index, num] of nums.entries()) {
        const needed = target - num;
        
        if (lookup.has(needed)) {
            return [lookup.get(needed)!, index];
        }
        
        lookup.set(num, index);
    }

    return null;
};

export default twoSum;

