class DetectSquares {
    private pointLookup: Map<string, number>;
    private rowPointsLookup: Map<number, number[]>;
    
    constructor() {
        this.pointLookup = new Map();
        this.rowPointsLookup = new Map();
    }

    add(point: number[]): void {
        const [x, y] = point;
        const pointCount = this.pointLookup.get(`${x},${y}`);
        if (pointCount === undefined) {
            this.pointLookup.set(`${x},${y}`, 1);
        } else {
            this.pointLookup.set(`${x},${y}`, pointCount + 1);
        }

        const rowPoints = this.rowPointsLookup.get(y);
        if (rowPoints === undefined) {
            this.rowPointsLookup.set(y, [x]);
        } else {
            rowPoints.push(x);
        }
    }

    count(point: number[]): number {
        const [x, y] = point;
        const rowPoints = this.rowPointsLookup.get(y);
        let result = 0;
        
        if (rowPoints === undefined) {
            return 0;
        }
        
        for (const rowPointX of rowPoints) {
            if (rowPointX === x) {
                continue;
            }
            
            const distance = Math.abs(x - rowPointX);
            
            result +=
                (
                    (this.pointLookup.get(`${x},${y-distance}`) || 0)
                    * (this.pointLookup.get(`${rowPointX},${y-distance}`) || 0)
                )
                + (
                    (this.pointLookup.get(`${x},${y+distance}`) || 0)
                    * (this.pointLookup.get(`${rowPointX},${y+distance}`) || 0)
                );
        }
        
        return result;
    }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

export default DetectSquares;

