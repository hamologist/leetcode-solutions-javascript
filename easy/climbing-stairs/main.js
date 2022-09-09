const climbStairs = function(n) {
    let [one, two] = [1, 1];
    
    for (let i = n - 2; i >= 0; i--) {
        const temp = one;
        one = one + two;
        two = temp
    }
    
    return one;
};

export const climbStairsWithMemo = function(n) {
    const lookup = new Map();
    
    const inner = (remaining) => {
        if (lookup.has(remaining)) {
            return lookup.get(remaining);
        }
        if (remaining < 0) {
            return 0;
        }
        if (remaining === 0) {
            return 1;
        }
        
        const result = inner(remaining - 1) + inner(remaining - 2);
        lookup.set(remaining, result);
        return result;
    }
    
    return inner(n);
};

export default climbStairs;

