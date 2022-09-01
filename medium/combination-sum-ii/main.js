const combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    
    const inner = (i, current, sum) => {
        if (sum === target) {
            result.push([...current]);
            return;
        } else if (sum > target || i >= candidates.length) {
            return;
        }
        
        current.push(candidates[i]);
        inner(i + 1, current, sum + candidates[i]);
        
        current.pop();
        while (i < candidates.length && candidates[i] === candidates[i + 1]) {
            i += 1;
        }
        inner(i + 1, current, sum);
    };
    inner(0, [], 0);
    
    return result;
};

export default combinationSum2;

