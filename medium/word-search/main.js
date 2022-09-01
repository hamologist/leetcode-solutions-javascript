const exist = function(board, word) {
    const memo = new Set();
    
    const dfs = (currentRow, currentCol, i) => {
        if (i === word.length) {
            return true;
        }
        if (currentRow < 0 || currentCol < 0
            || currentRow >= board.length || currentCol >= board[0].length
            || word[i] !== board[currentRow][currentCol]
            || memo.has(`${currentRow},${currentCol}`)) {
            return false;
        }

        memo.add(`${currentRow},${currentCol}`)
        const result = (
            dfs(currentRow + 1, currentCol, i + 1)
            || dfs(currentRow - 1, currentCol, i + 1)
            || dfs(currentRow, currentCol + 1, i + 1)
            || dfs(currentRow, currentCol - 1, i + 1)
        );
        memo.delete(`${currentRow},${currentCol}`);

        return result;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0) === true) {
                return true;
            }
        }
    }
    return false;
};

export default exist;

