class Gardner {
    private pos: number;
    private maxCapacity: number;
    private currentCapacity: number;
    private stepsMade: number;

    public constructor(capacity: number) {
        this.pos = -1;
        this.stepsMade = 0;
        this.maxCapacity = capacity;
        this.currentCapacity = capacity;
    }

    public water(plants: number[]): number {
        this.pos = -1;
        this.stepsMade = 0;
        
        while(this.pos < plants.length - 1) {
            this.waterIteration(plants[this.pos + 1])
        }
        
        return this.stepsMade;
    }

    private waterIteration(needed: number) {
        if (this.currentCapacity >= needed) {
            this.pos += 1;
            this.stepsMade += 1;
            this.currentCapacity -= needed;
        } else {
            this.stepsMade += (2 * this.pos) + 3;
            this.pos += 1;
            this.currentCapacity = this.maxCapacity - needed;
        }
    }
}

function wateringPlants(plants: number[], capacity: number): number {
    const gardner = new Gardner(capacity);
    return gardner.water(plants);
};

export default wateringPlants;
