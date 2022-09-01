const solve = function(board) {
    const [ROWS, COLS] = [board.length, board[0].length];
    
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== 'O') {
            return;
        }
        
        board[r][c] = 'T';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0);
        dfs(i, COLS - 1);
    }
    
    for (let i = 0; i < COLS; i++) {
        dfs(0, i);
        dfs(ROWS - 1, i);
    }
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'T') {
                board[i][j] = 'O';
            }
        }
    }
};

export default solve;
