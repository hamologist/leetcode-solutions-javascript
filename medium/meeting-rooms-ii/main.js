const minMeetingRooms = function(intervals) {
    const start = intervals.map((interval) => interval[0]);
    const end = intervals.map((interval) => interval[1]);
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    let [startPtr, endPtr] = [0, 0];
    
    let count = 0;
    let maxCount = 0;
    while (startPtr < start.length && endPtr < end.length) {
        if (start[startPtr] < end[endPtr]) {
            startPtr += 1;
            count += 1;
            maxCount = Math.max(maxCount, count);
        } else {
            endPtr += 1;
            count -= 1;
        }
    }
    
    return maxCount;
};

export default minMeetingRooms;

