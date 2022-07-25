const directions = [ [1, 0], [0, 1], [-1, 0], [0, -1] ];

function swimInWater(grid: number[][]): number {
    const [yLength, xLength] = [grid.length, grid[0].length];
    const memo = new Map();
    let currentStack = [[0, 0, grid[0][0]]];
    let result = Number.MAX_VALUE;
    
    memo.set('0,0', grid[0][0]);
    
    while (currentStack.length > 0) {
        const newStack = [];
        while (currentStack.length > 0) {
            let [currentY, currentX, currentLargest] = currentStack.pop()!;
            
            if (currentY === yLength - 1 && currentX === xLength - 1) {
                result = Math.min(result, currentLargest);
                continue;
            }
            
            if (currentLargest >= result) {
                continue;
            }
            
            for (const [directionY, directionX] of directions) {
                const newY = currentY + directionY;
                const newX = currentX + directionX;
                if (newY >= 0 && newY < yLength && newX >= 0 && newX < xLength) {
                    const newLargest = Math.max(currentLargest, grid[newY][newX]);
                    const check = memo.get(`${newY},${newX}`);
                    if (check === undefined || check > newLargest) {
                        memo.set(`${newY},${newX}`, newLargest);
                        newStack.push([newY, newX, newLargest]);
                    }
                }
            }
        }
        
        currentStack = newStack;
    }
    
    return result;
};

export default swimInWater;

