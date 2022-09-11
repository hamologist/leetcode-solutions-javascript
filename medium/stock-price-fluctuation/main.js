class StockPrice {
    constructor() {
        this.lookup = new Map();
        this.minHeap = new MinPriorityQueue({
            compare: (a, b) => a.price > b.price,
        });
        this.maxHeap = new MaxPriorityQueue({
            compare: (a, b) => a.price < b.price,
        });
        this.latest = -Infinity;
    }
    
    /** 
     * @param {number} timestamp 
     * @param {number} price
     * @return {void}
     */
    update(timestamp, price) {
        this.lookup.set(timestamp, price);
        this.minHeap.enqueue({timestamp, price});
        this.maxHeap.enqueue({timestamp, price});
        this.latest = Math.max(this.latest, timestamp);
    }

    /**
     * @return {number}
     */
    current() {
        return this.lookup.get(this.latest);
    }

    /**
     * @return {number}
     */
    maximum() {
        let front = this.maxHeap.front();
        
        while (this.lookup.get(front.timestamp) !== front.price) {
            this.maxHeap.dequeue();
            front = this.maxHeap.front();
        }
        
        return front.price;
    }

    /**
     * @return {number}
     */
    minimum() {
        let front = this.minHeap.front();
        
        while (this.lookup.get(front.timestamp) !== front.price) {
            this.minHeap.dequeue();
            front = this.minHeap.front();
        }
        
        return front.price;
    }
}

export default StockPrice;

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
