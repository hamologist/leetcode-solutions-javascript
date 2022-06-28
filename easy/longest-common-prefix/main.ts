export function longestCommonPrefix(strs: string[]): string {
    let index = 0;
    let prefix = "";
    
    let continueLooping = true;
    while (continueLooping) {
        if (index >= strs[0].length) {
            break;
        }
        const checkChar = strs[0][index];
        
        for (const str of strs) {
            if (index >= str.length || str[index] !== checkChar) {
                continueLooping = false;
                break;
            }
        }
        
        if (continueLooping) {
            prefix += checkChar;
            index += 1;
        }
    }
    
    return prefix;
};

