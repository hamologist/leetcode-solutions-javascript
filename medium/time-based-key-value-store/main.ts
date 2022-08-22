class TimeMap {
    private lookup: Map<string, Array<[number, string]>>;
    
    constructor() {
        this.lookup = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        let timestamps = this.lookup.get(key)
        
        if (timestamps === undefined) {
            this.lookup.set(key, [[timestamp, value]]);
        } else {
            timestamps.push([timestamp, value]);
        }
    }

    get(key: string, timestamp: number): string {
        const timestamps = this.lookup.get(key);
        
        if (timestamps === undefined) {
            return "";
        }
        
        let left = 0;
        let right = timestamps.length - 1;
        let largestTimestamp = -1;
        let result = "";

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (timestamps[mid][0] === timestamp) {
                return timestamps[mid][1];
            } else if (timestamps[mid][0] < timestamp) {
                if (largestTimestamp < timestamps[mid][0]) {
                    largestTimestamp = timestamps[mid][0];
                    result = timestamps[mid][1];
                }
                
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
}

export default TimeMap;

