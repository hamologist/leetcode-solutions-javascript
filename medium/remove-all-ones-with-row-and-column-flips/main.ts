const flipColumns = (grid: number[][], columnIndex: number) => {
    for (let y = 0; y < grid.length; y++) {
        grid[y][columnIndex] = grid[y][columnIndex] === 1 ? 0 : 1;
    }
};

function removeOnes(grid: number[][]): boolean {
    // First, iterate over the top row and start flipping columns to get the first row into all zeros
    for (let x = 0; x < grid[0].length; x++) {
        if (grid[0][x] === 1) {
            flipColumns(grid, x);
        }
    }
    
    // Start from the 2nd row and below, attempting to find any row with inconsistent row values.
    // If any are found, return false
    for (let y = 1; y < grid.length; y++) {
        const first = grid[y][0];
        for (let x = 1; x < grid[0].length; x++) {
            if (grid[y][x] !== first) {
                return false;
            }
        }
    }
    
    // If you finish iterating the entire matrix, return true
    return true;
};

export default removeOnes;

