interface Robot {
    // Returns true if the cell in front is open and robot moves into the cell.
    // Returns false if the cell in front is blocked and robot stays in the current cell.
    move(): boolean;

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    turnRight(): void;

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    turnLeft(): void;

    // Clean the current cell.
    clean(): void;
}

/**
 * class Robot {
 *      // Returns true if the cell in front is open and robot moves into the cell.
 *      // Returns false if the cell in front is blocked and robot stays in the current cell.
 * 		move(): boolean {}
 * 		
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnRight() {}
 * 		
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnLeft() {}
 * 		
 * 		// Clean the current cell.
 * 		clean(): {}
 * }
 */

const cellAsString = ([y, x]: [number, number]) => {
    return `${y},${x}`;
}

function cleanRoom(robot: Robot) {
    const goBack = () => {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }
    
    const backtrack = (cell: [number, number], direction: number) => {
        memo.add(cellAsString(cell));
        robot.clean();
        
        for (let i = 0; i < 4; i++) {
            const newDirection = (direction + i) % 4;
            const [newY, newX] = directions[newDirection];
            const newCell: [number, number] = [cell[0] + newY, cell[1] + newX];
            
            if (!memo.has(cellAsString(newCell)) && robot.move()) {
                backtrack(newCell, newDirection);
                goBack();
            }
            robot.turnRight();
        }
    }
    const directions = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];
    const memo = new Set();
    
    backtrack([0, 0], 0);
};

export default cleanRoom;

