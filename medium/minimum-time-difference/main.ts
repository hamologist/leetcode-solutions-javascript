const convertTimePoint = (timePoint: string): number => {
    const [hours, minutes] = timePoint.split(':').map(Number);
    
    return (hours * 60) + minutes;
}

function findMinDifference(timePoints: string[]): number {
    const timeInMinutes = timePoints.map(convertTimePoint).sort((a, b) => a - b);
    
    let result = Number.MAX_VALUE;
    for (let i = 0; i < timeInMinutes.length - 1; i++) {
        const [left, right] = [timeInMinutes[i], timeInMinutes[i+1]];
        
        result = Math.min(result, right - left);
    }
    result = Math.min(result, 60 * 24 - timeInMinutes[timeInMinutes.length-1] + timeInMinutes[0])
    
    return result;
};

export default findMinDifference;

