function decompressRLElist(nums: number[]): number[] {
    const result = [];
    
    for (let i = 0; i < nums.length; i += 2) {
        const [freq, val] = [nums[i], nums[i+1]];
        result.push(...Array(freq).fill(val));
    }
    
    return result;
}

export default decompressRLElist;

