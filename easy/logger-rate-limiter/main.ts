class Logger {
    private lookup: { [key: string]: number }
    
    constructor() {
        this.lookup = {};
    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        let result = false;
        const current = this.lookup[message];

        if (current === undefined || current <= timestamp) {
            this.lookup[message] = timestamp + 10;
            result = true;
        }

        return result;
    }
}

export default Logger;
