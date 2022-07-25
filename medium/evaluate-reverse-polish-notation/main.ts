function evalRPN(tokens: string[]): number {
    const stack: (string|number)[] = [];
    
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const asNumber = Number(token);
        if (!isNaN(asNumber)) {
            stack.push(asNumber);
        } else {
            const right = stack.pop() as number;
            const left = stack.pop() as number;
            
            switch (token) {
                case ('+'):
                    stack.push(left + right);
                    break;
                case ('-'):
                    stack.push(left - right);
                    break;
                case ('*'):
                    stack.push(left * right);
                    break;
                case ('/'):
                    stack.push(~~(left / right));
                    break;
            }
        }
    }
    
    return stack.pop()! as number;
};

export default evalRPN;

