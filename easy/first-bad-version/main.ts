const solution = function(isBadVersion: (version: number) => boolean) {
    return function(n: number): number {
        let [low, high] = [1, n];
        let current = Math.floor((low + high) / 2);
        while (low !== high) {
            if (isBadVersion(current) === false) {
                low = current + 1;  
            } else {
                high = current
            }
            current = Math.floor((low + high) / 2);
            
        }
        
        return low;
    };
};

export default solution
