function maximumUnits(boxTypes: number[][], truckSize: number): number {
    let result = 0;
    const sorted = [...boxTypes].sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        }
        
        if (a[1] < b[1]) {
            return 1;
        }
        
        return 0;
    });
    
    for (let i = 0; i < sorted.length && truckSize > 0; i++) {
        const [numberOfBoxes, unitsPerBox] = sorted[i];
        
        if (numberOfBoxes <= truckSize) {
            result += numberOfBoxes * unitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            result += truckSize * unitsPerBox;
            truckSize = 0;
        }
    }
    
    return result;
};

export default maximumUnits

