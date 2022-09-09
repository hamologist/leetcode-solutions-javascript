const maxProduct = function(nums) {
    let result = -Infinity;
    let [currentMax, currentMin] = [1, 1];
    
    for (const num of nums) {
        const temp = currentMax * num;
        currentMax = Math.max(num * currentMax, num * currentMin, num);
        currentMin = Math.min(temp, num * currentMin, num);
        result = Math.max(result, currentMax);
    }
    
    return result;
};

export default maxProduct;

