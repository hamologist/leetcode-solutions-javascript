const pacificAtlantic = function(heights) {
    const pacific = new Set();
    const atlantic = new Set();
    const [ROWS, COLS] = [heights.length, heights[0].length];
    const results = [];
    
    const dfs = (row, col, prev, ocean) => {
        if (row < 0 || row >= ROWS
            || col < 0 || col >= COLS
            || ocean.has(`${row},${col}`) || heights[row][col] < prev) {
            return;
        }
        
        ocean.add(`${row},${col}`);
        prev = heights[row][col];
        dfs(row + 1, col, prev, ocean);
        dfs(row - 1, col, prev, ocean);
        dfs(row, col + 1, prev, ocean);
        dfs(row, col - 1, prev, ocean);
    }
    
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0, -1, pacific);
        dfs(i, heights[0].length - 1, -1, atlantic);
    }
    
    for (let i = 0; i < COLS; i++) {
        dfs(0, i, -1, pacific);
        dfs(heights.length - 1, i, -1, atlantic);
    }
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (pacific.has(`${i},${j}`) && atlantic.has(`${i},${j}`)) {
                results.push([i, j]);
            }
        }
    }
    
    return results;
};

export default pacificAtlantic;

