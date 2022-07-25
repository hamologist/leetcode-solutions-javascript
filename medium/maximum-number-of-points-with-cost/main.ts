function maxPoints(points: number[][]): number {
    const left = Array(points[0].length).fill(0);
    const right = Array(points[0].length).fill(0);
    let dp = [...points[0]];
    
    for (let y = 1; y < points.length; y++) {
        for (let x = 0; x < points[0].length; x++) {
            if (x === 0) {
                left[x] = dp[x];
            } else {
                left[x] = Math.max(left[x-1]-1, dp[x]);
            }
        }
        
        for (let x = points[0].length - 1; x >= 0; x--) {
            if (x === points[0].length - 1) {
                right[x] = dp[x];
            } else {
                right[x] = Math.max(right[x+1]-1, dp[x]);
            }
        }
        
        for (let x = 0; x < points[0].length; x++) {
            dp[x] = points[y][x] + Math.max(left[x], right[x]);
        }
    }
    
    return Math.max(...dp);
};

export default maxPoints;

