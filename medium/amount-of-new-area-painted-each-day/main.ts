function amountPainted(paint: number[][]): number[] {
    const jumpLine = Array(50001).fill(0);
    const result = Array(paint.length).fill(0);
    
    for (let i = 0; i < paint.length; i++) {
        let [left, right] = [paint[i][0], paint[i][1]];
        while (left < right) {
            const jump = Math.max(left + 1, jumpLine[left]);

            if (jumpLine[left] === 0) {
                result[i] += 1;
            }

            jumpLine[left] = Math.max(jumpLine[left], right);
            left = jump;
        }
    }
    
    return result;
};

export default amountPainted;

