function minPathSum(grid: number[][]): number {
  let answer = Number.MAX_VALUE;
  const maxY = grid.length - 1;
  const maxX = grid[0].length - 1;
  const end = `${maxY},${maxX}`;
  const memo: { [key: string]: number } = {};

  const inner = ([y, x]: [number, number], current: number) => {
    if (y > maxY) {
      return;
    }
    if (x > maxX) {
      return;
    }

    const cordAsString = `${y},${x}`;
    current += grid[y][x];
    const check = memo[cordAsString];
    if (check !== undefined && check <= current) {
      return;
    }
    memo[cordAsString] = current;

    if (cordAsString === end) {
      answer = Math.min(answer, current);
    }

    inner([y + 1, x], current);
    inner([y, x + 1], current);
  };
  inner([0, 0], 0);

  return answer;
}

export default minPathSum;
