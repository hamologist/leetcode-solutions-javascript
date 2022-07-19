function racecar(target: number): number {
    const memo = new Set<string>();
    let stackToEvaluate: [number, number, number][] = [[0, 1, 0]];
    
    while (stackToEvaluate.length > 0) {
       
        const nextStack: [number, number, number][] = [];
        while (stackToEvaluate.length > 0) {
            const [pos, speed, movesMade] = stackToEvaluate.pop()!;
            
            const memoKey = `${pos},${speed}`;
            if (memo.has(memoKey)) {
                continue;
            }
            memo.add(memoKey);
            
            if (pos === target) {
                return movesMade;
            }
            
            nextStack.push([speed + pos, speed * 2, movesMade + 1]);
            
            if (speed > 0 && speed + pos > target) {
                nextStack.push([pos, -1, movesMade + 1]);
            } else if (speed < 0 && speed + pos < target) {
                nextStack.push([pos, 1, movesMade + 1]);
            }
        }
        
        stackToEvaluate = nextStack;
    }
        
    return -1;
};

export default racecar;

