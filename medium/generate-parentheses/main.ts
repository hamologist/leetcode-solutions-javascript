function generateParenthesis(n: number): string[] {
    const result = [];
    
    let currentStack: [number, number, string][] = [[n, n, '']];
    
    while (currentStack.length > 0) {
        const [left, right, token] = currentStack.pop()!;

        if (left === 0 && right === 0) {
            result.push(token);
            continue;
        }

        if (left > 0) {
            currentStack.push([left - 1, right, `${token}(`]);
        }

        if (right > left) {
            currentStack.push([left, right - 1, `${token})`]);
        }
    }
    
    return result;
};

export default generateParenthesis;

