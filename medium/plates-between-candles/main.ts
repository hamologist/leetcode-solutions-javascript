function platesBetweenCandles(s: string, queries: number[][]): number[] {
    const candleLeft = [];
    const candleRight = [];
    const plates = [];
    
    let candleLeftCurrent = -1;
    let currentPlateCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            candleLeftCurrent = i;
        } else {
            currentPlateCount += 1;
        }
        candleLeft.push(candleLeftCurrent);
        plates.push(currentPlateCount);
    }
    
    let candleRightCurrent = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '|') {
            candleRightCurrent = i;
        }
        candleRight.push(candleRightCurrent);
    }
    candleRight.reverse();
    
    let result = [];
    for (const [leftIndex, rightIndex] of queries) {
        const [left, right] = [candleRight[leftIndex], candleLeft[rightIndex]];
        
        if (left < 0 || right < 0 || left > right) {
            result.push(0);
        } else {
            result.push(plates[right] - plates[left]);   
        }
    }
    
    return result;
};

export default platesBetweenCandles;
