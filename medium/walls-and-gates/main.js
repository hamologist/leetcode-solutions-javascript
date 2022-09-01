const wallsAndGates = function(rooms) {
    const [ROWS, COLS] = [rooms.length, rooms[0].length];
    
    const bfsIterate = (row, col, stack, distance) => {
        stack.push([row + 1, col, distance]);
        stack.push([row - 1, col, distance]);
        stack.push([row, col + 1, distance]);
        stack.push([row, col - 1, distance]);
    };
    
    const bfs = (row, col) => {
        let currentStack = [];
        bfsIterate(row, col, currentStack, 1);
        
        while (currentStack.length > 0) {
            const newStack = [];
            
            for (const [r, c, distance] of currentStack) {
                if (r < 0 || c < 0
                    || r >= ROWS || c >= COLS
                    || rooms[r][c] === -1 || rooms[r][c] === 0
                    || rooms[r][c] <= distance) {
                    continue;
                }
                
                rooms[r][c] = distance;
                bfsIterate(r, c, newStack, distance + 1);
            }
            currentStack = newStack;
        }
    };
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (rooms[i][j] === 0) {
                bfs(i, j);
            }
        }
    }
};

export default wallsAndGates;
