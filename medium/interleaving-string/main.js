const isInterleave = function(s1, s2, s3) {
    if (s3.length !== s1.length + s2.length) {
        return false;
    }
    
    const dp = new Map();
    const inner = (i, j, k) => {
        if (k === s3.length) {
            return true;
        }
        if (dp.has(`${i},${j},${k}`)) {
            return dp.get(`${i},${j},${k}`);
        }
        
        let result = false;
        if (i < s1.length && s1[i] === s3[k]) {
            result = inner(i + 1, j, k + 1);
        }
        if (j < s2.length && s2[j] === s3[k]) {
            result = result || inner(i, j + 1, k + 1);
        }
        
        dp.set(`${i},${j},${k}`, result);
        return result;
    }
    
    return inner(0, 0, 0);
};

export default isInterleave;

