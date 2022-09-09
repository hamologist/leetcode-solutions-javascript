const longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text1.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(text2.length + 1);
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][text2.length] = 0;
    }
    for (let j = 0; j <= text2.length + 1; j++) {
        dp[dp.length - 1][j] = 0;
    }
    
    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i+1][j+1];
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]);   
            }
        }
    }
    
    return dp[0][0];
};

export default longestCommonSubsequence;

