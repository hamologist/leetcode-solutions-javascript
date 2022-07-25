function countBattleships(board: string[][]): number {
    const checked = new Set();
    let result = 0;
    
    let m = board.length;
    let n = board[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Skip if not in a battleship space
            if (board[i][j] === '.') {
                continue;
            }
            
            // Check if the current cord is in our checked set, if it is, skip
            if (checked.has(`${i},${j}`)) {
                continue;
            }
            
            // We've hit a new battleship!
            result += 1;
            
            // Check if the ship is horizontally or vertically oriented            
            if (j < n - 1 && board[i][j + 1] === 'X') {
                // For horizontal ships, advance j to the end of the ship and increment the result
                while (board[i][j] === 'X' && j < n) {
                    j++;
                }
                
            } else if (i < m - 1 && board[i + 1][j] === 'X') {
                // For vertical ships, register the cords in our checked set and increment the result
                for (let runner = i; runner < m && board[runner][j] === 'X'; runner++) {
                    checked.add(`${runner},${j}`);
                }
            }
        }
    }
    
    return result;
};

export default countBattleships;

