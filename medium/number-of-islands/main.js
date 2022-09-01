const numIslands = function(grid) {
    let result = 0;
    
    const dfs = (i, j) => {
        grid[i][j] = 0;
        
        if (i > 0 && grid[i-1][j] === '1') {
            dfs(i-1, j);
        }
        if (j > 0 && grid[i][j-1] === '1') {
            dfs(i, j-1);
        }
        if (i < grid.length - 1 && grid[i+1][j] === '1') {
            dfs(i+1, j);
        }
        if (j < grid[0].length - 1 && grid[i][j+1] === '1') {
            dfs(i, j+1);
        }
    }
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                result += 1;
                dfs(row, col);
            }
        }
    }
    
    return result;
};

export default numIslands;

