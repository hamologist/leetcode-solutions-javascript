class MyCalendar {
    constructor() {
        this.events = [];
    }
    
    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        let [left, right] = [0, this.events.length - 1];
        
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            
            const [currentStart, currentEnd] = this.events[mid];
            if (start < currentEnd && end > currentStart) {
                return false;
            }
            if (start >= currentEnd) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        this.events.splice(left, 0, [start, end]);
        return true;
    }
}

export default MyCalendar;

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
