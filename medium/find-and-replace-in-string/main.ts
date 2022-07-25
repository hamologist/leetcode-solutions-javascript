function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
    let result = "";
    const indiceLookup = new Map();
    
    for (let i = 0; i < indices.length; i++) {
        indiceLookup.set(indices[i], i);
    }
    
    for (let i = 0; i < s.length; i++) {
        const index = indiceLookup.get(i);
        if (index !== undefined) {
            const source = sources[index];
            
            if (source.length > s.length - i || s.slice(i, i + source.length) !== source) {
                result += s[i];
            } else {
                result += targets[index];
                i += source.length - 1;
            }
        } else {
            result += s[i];
        }
    }
    
    return result;
};

export default findReplaceString;

