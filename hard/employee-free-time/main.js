const employeeFreeTime = function(schedule) {
    const combined = [];
    
    for (const employee of schedule) {
        for (const interval of employee) {
            combined.push(interval);   
        }
    }
    combined.sort((a, b) => a.start === b.start ? a.end - b.end : a.start - b.start);
    
    let result = [];
    let currentEnd = combined[0].end;
    for (let i = 1; i < combined.length; i++) {
        if (combined[i].start > currentEnd) {
            result.push(new Interval(currentEnd, combined[i].start));
        }
        
        currentEnd = Math.max(currentEnd, combined[i].end);
    }
    
    return result;
};

export default employeeFreeTime;
