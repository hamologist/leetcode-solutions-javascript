const longestIncreasingPath = function(matrix) {
    const [ROWS, COLS] = [matrix.length, matrix[0].length];
    const memo = new Map();
    
    const inner = (r, c, prev) => {
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS || prev >= matrix[r][c]) {
            return -1;
        }
        if (memo.has(`${r},${c}`)) {
            return memo.get(`${r},${c}`);
        }
        
        let result = 0;
        result = Math.max(result, 1 + inner(r - 1, c, matrix[r][c]));
        result = Math.max(result, 1 + inner(r + 1, c, matrix[r][c]));
        result = Math.max(result, 1 + inner(r, c - 1, matrix[r][c]));
        result = Math.max(result, 1 + inner(r, c + 1, matrix[r][c]));
        
        memo.set(`${r},${c}`, result);
        return result;
    };
    
    let maxIncreasingPath = 0;
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            maxIncreasingPath = Math.max(maxIncreasingPath, 1 + inner(i, j, -Infinity));
        }
    }
    
    return maxIncreasingPath;
};

export default longestIncreasingPath;

