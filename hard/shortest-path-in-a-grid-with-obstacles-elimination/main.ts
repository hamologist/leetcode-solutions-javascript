interface Move {
    y: number;
    x: number;
    currentK: number;
}

interface Direction {
    y: number;
    x: number;
}

function shortestPath(grid: number[][], k: number): number {
    const memo = new Set();
    const directions: Direction[] = [{y: -1, x: 0}, {y: 1, x: 0}, {y: 0, x: -1}, {y: 0, x: 1}]
    let queue: Move[] = [{ y: 0, x: 0, currentK: k }];
    let moveCount = 0;
    
    memo.add(`0,0,${k}`);
    
    while (queue.length > 0) {
        let innerQueue: Move[] = [];
        
        while (queue.length > 0) {
            const {y, x, currentK} = queue.pop()!;

            if (y === grid.length - 1 && x === grid[0].length - 1) {
                return moveCount;
            }
            
            for (const direction of directions) {
                let [moveY, moveX] = [y + direction.y, x + direction.x];
                
                if (moveY < 0 || moveX < 0 || moveY >= grid.length || moveX >= grid[0].length ||
                   (grid[moveY][moveX] === 1 && currentK === 0)) {
                    continue;
                }
                
                const newK = grid[moveY][moveX] === 1 ? currentK - 1 : currentK;
                const memoKey = `${moveY},${moveX},${newK}`;
                
                if (!memo.has(memoKey)) {
                    memo.add(memoKey);
                    innerQueue.push({ y: moveY, x: moveX, currentK: newK });
                }
            }
        }

        queue = innerQueue;
        moveCount += 1;
    }
    
    return -1;
};

export default shortestPath;

