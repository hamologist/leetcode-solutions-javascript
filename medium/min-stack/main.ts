class MinStack {
    protected stack: [number, number][];
    
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        if (this.stack.length > 0) {
            this.stack.push([val, Math.min(this.getMin(), val)]);
        } else {
            this.stack.push([val, val]);
        }
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    getMin(): number {
        return this.stack[this.stack.length - 1][1];
    }
}

export default MinStack;

