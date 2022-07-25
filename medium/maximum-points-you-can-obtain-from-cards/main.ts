function maxScore(cardPoints: number[], k: number): number {
    let frontScore = 0;
    let rearScore = 0;
    
    for (let i = 0; i < k; i++) {
        frontScore += cardPoints[i];
    }
    
    let currentMax = frontScore;
    for (let i = k - 1; i >= 0; i--) {
        rearScore += cardPoints[cardPoints.length - (k - i)];
        frontScore -= cardPoints[i];
        currentMax = Math.max(currentMax, frontScore + rearScore);
    }
    
    return currentMax;
};

export default maxScore;

