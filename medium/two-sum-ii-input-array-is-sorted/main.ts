function twoSum(numbers: number[], target: number): number[] {
    let [left, right] = [0, numbers.length - 1];
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        
        if (sum > target) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    
    throw new Error("Failed to find target");
};

export default twoSum;

