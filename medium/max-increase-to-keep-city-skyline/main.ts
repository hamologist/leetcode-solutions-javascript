function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const maxCols: number[] = new Array(grid.length).fill(0);
  const maxRows: number[] = new Array(grid.length).fill(0);
  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      maxRows[i] = Math.max(grid[i][j], maxRows[i]);
      maxCols[j] = Math.max(grid[i][j], maxCols[j]);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      ans += Math.min(maxRows[i], maxCols[j]) - grid[i][j];
    }
  }

  return ans;
}

export default maxIncreaseKeepingSkyline;
