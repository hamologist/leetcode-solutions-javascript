enum GardnerMove {
    Increment,
    Decrement,
}

class Gardner {
    public pos: number;
    public remainingCapacity: number;
    public maxCapacity: number;
    private move: () => void;

    constructor(pos: number, maxCapacity: number, move: GardnerMove) {
        this.pos = pos;
        this.remainingCapacity = maxCapacity;
        this.maxCapacity = maxCapacity;
        
        switch (move) {
            case GardnerMove.Increment:
                this.move = function() {
                    this.pos += 1;
                }
                break;
            case GardnerMove.Decrement:
                this.move = function() {
                    this.pos -= 1;
                }
                break;
        }
    }
    
    public water(needed: number): number {
        let refill = 0;

        if (this.remainingCapacity >= needed) {
            this.remainingCapacity -= needed; 
        } else {
            refill = 1;
            this.remainingCapacity = this.maxCapacity - needed;
        }
        this.move();

        return refill
    }
}

function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
    const [gardnerA, gardnerB] = [
        new Gardner(0, capacityA, GardnerMove.Increment),
        new Gardner(plants.length - 1, capacityB, GardnerMove.Decrement),
    ];
    let refilCount = 0;
    
    while (gardnerA.pos < gardnerB.pos) {
        refilCount += gardnerA.water(plants[gardnerA.pos]);
        refilCount += gardnerB.water(plants[gardnerB.pos]);
    }
    
    // Handle for when they occupy the same space
    if (gardnerA.pos === gardnerB.pos) {
        if (gardnerA.remainingCapacity >= gardnerB.remainingCapacity) {
            refilCount += gardnerA.water(plants[gardnerA.pos]);
        } else {
            refilCount += gardnerB.water(plants[gardnerB.pos]);
        }
    }
    
    return refilCount;
};

export default minimumRefill;
