class SnapshotArray {
    private snapshotArray: Map<number, number>;
    private snaps: Map<number, number>[];
    
    constructor(_: number) {
        this.snapshotArray = new Map();
        this.snaps = [];
    }

    set(index: number, val: number): void {
        this.snapshotArray.set(index, val);
    }

    snap(): number {
        this.snaps.push(new Map(this.snapshotArray));
        
        return this.snaps.length - 1;
    }

    get(index: number, snap_id: number): number {
        return this.snaps[snap_id].get(index) || 0;
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

export default SnapshotArray;

