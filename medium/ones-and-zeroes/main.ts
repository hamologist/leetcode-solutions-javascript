function findMaxForm(strs: string[], m: number, n: number): number {
    const memo = new Map();
    const strsAsCounts: [number, number][] = strs.map((str) => [(str.match(/0/g)||[]).length, (str.match(/1/g)||[]).length]);
    
    const inner = (i: number, remainingM: number, remainingN: number): number => {
        if (i === strs.length) {
            return 0;
        }
        
        const key = `${i},${remainingM},${remainingN}`;
        const check = memo.get(key);
        if (check !== undefined) {
            return check;
        }
        
        const [zeros, ones] = strsAsCounts[i];
        let taken = 0;
        if (zeros <= remainingM && ones <= remainingN) {
            taken = inner(i + 1, remainingM - zeros, remainingN - ones) + 1;
        }
        let best = Math.max(taken, inner(i + 1, remainingM, remainingN));
        
        memo.set(key, best);
        return best;
    };
    
    return inner(0, m, n);
};

export default findMaxForm;

