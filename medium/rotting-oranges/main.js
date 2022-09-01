const orangesRotting = function(grid) {
    let result = 0;
    const [ROWS, COLS] = [grid.length, grid[0].length];
    const fresh = new Set();
    let rotten = [];
    
    const bfsAdd = (r, c, t, stack) => {
        stack.push([r - 1, c, t + 1]);
        stack.push([r + 1, c, t + 1]);
        stack.push([r, c - 1, t + 1]);
        stack.push([r, c + 1, t + 1]);
    };
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) {
                fresh.add(`${i},${j}`);
            } else if (grid[i][j] === 2) {
                bfsAdd(i, j, 0, rotten);
            }
        }
    }
    
    while (rotten.length > 0) {
        const newRotten = [];
        
        for (const [r, c, t] of rotten) {
            if (r >= 0 && c >= 0 && r < ROWS && c < COLS && grid[r][c] === 1) {
                grid[r][c] = 2;
                fresh.delete(`${r},${c}`);
                result = Math.max(result, t);
                bfsAdd(r, c, t, newRotten);
            }
        }
        
        rotten = newRotten;
    }
    
    if (fresh.size > 0) {
        return -1;
    }
    return result;
};

export default orangesRotting;

