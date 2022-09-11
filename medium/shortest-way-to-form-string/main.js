const shortestWay = function(source, target) {
    const lookup = new Map();
    
    for (let i = 0; i < source.length; i++) {
        let indexes = lookup.get(source[i]);
        
        if (indexes === undefined) {
            indexes = [];
            lookup.set(source[i], indexes);
        }
        indexes.push(i);
    }
    
    let result = 1;
    let [sourcePtr, targetPtr] = [0, 0];
    while (targetPtr < target.length) {
        const indexes = lookup.get(target[targetPtr]);
        
        if (indexes === undefined) {
            return -1;
        }
        
        let found = false;
        for (const index of indexes) {
            if (index >= sourcePtr) {
                sourcePtr = index;
                found = true;
                break;
            }
        }
        
        if (found === false) {
            result += 1;
            sourcePtr = indexes[0];
        }
        sourcePtr += 1;
        targetPtr += 1;
    }
    return result;
};

export default shortestWay;

