const longestLine = function(mat) {
    const [ROWS, COLS] = [mat.length, mat[0].length];
    const dp = Array(ROWS);
    for (let r = 0; r < ROWS; r++) {
        dp[r] = Array(COLS).fill([0, 0, 0, 0]);
    }
    
    let streak = 0;
    for (let c = 0; c < COLS; c++) {
        if (mat[0][c] === 1) {
            if (c > 0) {
                dp[0][c] = [dp[0][c-1][0] + 1, 1, 1, 1];
            } else {
                dp[0][c] = [1, 1, 1, 1];   
            }
            streak = Math.max(streak, dp[0][c][0]);
        }
    }
    
    for (let r = 1; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (mat[r][c] === 1) {
                if (c === 0) {
                    const vertical = dp[r-1][c][1] + 1;
                    let antiDiagonal = 1;
                    if (c < COLS - 1) {
                        antiDiagonal = dp[r-1][c+1][3] + 1;
                    }
                    dp[r][c] = [1, vertical, 1, antiDiagonal];
                    const biggestStreak = Math.max(1, vertical, 1, antiDiagonal);
                    streak = Math.max(streak, biggestStreak);
                } else {
                    const horizontal = dp[r][c-1][0] + 1;
                    const vertical = dp[r-1][c][1] + 1;
                    const diagonal = dp[r-1][c-1][2] + 1;
                    let antiDiagonal = 1;
                    if (c < COLS - 1) {
                        antiDiagonal = dp[r-1][c+1][3] + 1;
                    }
                    dp[r][c] = [horizontal, vertical, diagonal, antiDiagonal];
                    const biggestStreak = Math.max(horizontal, vertical, diagonal, antiDiagonal);
                    streak = Math.max(streak, biggestStreak);   
                }
            }
        }
    }
    
    return streak;
};

export default longestLine;

