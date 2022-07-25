function fullJustify(words: string[], maxWidth: number): string[] {
    const result = [];
    let lineBuilder: { availableSpace: number, tokens: string[] } = {
        availableSpace: maxWidth,
        tokens: [],
    };
    
    for (const word of words) {
        if (lineBuilder.availableSpace - word.length < 0) {
            if (lineBuilder.tokens.length === 1 && lineBuilder.availableSpace >= 0) {
                lineBuilder.tokens.push(' ');
                lineBuilder.availableSpace -= 1;
            }
            
            let i = 1;
            while (lineBuilder.availableSpace !== -1) {
                lineBuilder.tokens[i] += ' ';
                lineBuilder.availableSpace -= 1;
                i = (i + 2) % (lineBuilder.tokens.length - 1);
            }
            result.push(lineBuilder.tokens.reduce((acc, token) => acc + token, ""));
            
            lineBuilder = {
                availableSpace: maxWidth,
                tokens: [],
            }; 
        }
        
        if (lineBuilder.tokens.length === 0) {
            lineBuilder.tokens.push(word);
            lineBuilder.availableSpace -= word.length + 1;
        } else {
            lineBuilder.tokens.push(' ');
            lineBuilder.tokens.push(word);
            lineBuilder.availableSpace -= word.length + 1;   
        }
    }
    
    if (lineBuilder.tokens.length > 0) {
        if (lineBuilder.availableSpace >= 0) {
            lineBuilder.tokens.push(' ');
            lineBuilder.availableSpace -= 1;
            
            let i = lineBuilder.tokens.length - 1;
            while (lineBuilder.availableSpace !== -1) {
                lineBuilder.tokens[i] += ' ';
                lineBuilder.availableSpace -= 1;
            }
        }
        
        result.push(lineBuilder.tokens.reduce((acc, token) => acc + token, ""));
    }
    
    return result;
};

export default fullJustify;

