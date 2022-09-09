const rob = function(nums) {
    let [one, two] = [0, 0];
    
    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(nums[i] + one, two);
        one = two;
        two = temp;
    }
    
    return two;
};

export const rob = function(nums) {
    const lookup = new Map();
    
    const inner = (current) => {
        if (lookup.has(current)) {
            return lookup.get(current);
        }
        if (current >= nums.length) {
            return 0;
        }
        
        let best = 0;
        for (let i = current + 2; i < nums.length; i++) {
            best = Math.max(best, inner(i));
        }
        
        let currentHaul = 0;
        if (current >= 0) {
            currentHaul = nums[current];
        }
        lookup.set(current, currentHaul + best);
        return currentHaul + best;
    }
    
    return Math.max(inner(-1), inner(-2));
};

export default rob;

