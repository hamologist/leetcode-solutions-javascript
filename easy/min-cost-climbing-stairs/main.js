const minCostClimbingStairs = function(cost) {
    cost.push(0);
    
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    
    return Math.min(cost[0], cost[1]);
};

export const minCostClimbingStairsWithMemo = function(cost) {
    const lookup = new Map();
    
    const inner = (current) => {
        if (lookup.has(current)) {
            return lookup.get(current);
        }
        if (current >= cost.length) {
            return 0;
        }
        
        let compare = Math.min(inner(current + 1), inner(current + 2));
        lookup.set(current, cost[current] + compare);
        return cost[current] + compare;   
    }
    
    return Math.min(inner(0), inner(1));
};

export default minCostClimbingStairs;
