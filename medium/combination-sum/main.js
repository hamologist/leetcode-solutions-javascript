export const combinationSumWithSlices = function(candidates, target) {
    const result = [];
    
    const inner = (i, current, total) => {
        if (i >= candidates.length) {
            return;
        }

        if (total === target) {
            result.push(current.slice());
            return;
        } else if (total > target) {
            return;
        }
        
        current.push(candidates[i]);
        inner(i, [...current], total + candidates[i]);
        
        current.pop();
        inner(i + 1, [...current], total);
    };
    inner(0, [], 0);
    
    return result;
};

const combinationSum = function(candidates, target) {
    const result = [];
    const current = [];
    
    const inner = (i) => {
        if (i >= candidates.length) {
            return;
        }
        
        let sum = 0;
        for (const num of current) {
            sum += num;
        }
        
        if (sum === target) {
            result.push(current.slice());
            return;
        } else if (sum > target) {
            return;
        }
        
        current.push(candidates[i]);
        inner(i);
        
        current.pop();
        inner(i + 1);
    };
    inner(0);
    
    return result;
};

export default combinationSum;

