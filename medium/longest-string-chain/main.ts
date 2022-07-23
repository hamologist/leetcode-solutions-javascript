function longestStrChain(words: string[]): number {
    const lookup = new Set(words);
    const memo = new Map();
    let result = 0;
    
    const calcWordChains = (word: string, currentChain: number): number => {
        if (memo.has(word)) {
            return memo.get(word);
        }
        
        let longestChild = 0;
        for (let i = 0; i < word.length; i++) {
            const nextWord = word.slice(0, i) + word.slice(i + 1);
            if (lookup.has(nextWord)) {
                longestChild = Math.max(longestChild, calcWordChains(nextWord, 1));
            }
        }

        memo.set(word, currentChain + longestChild);
        return currentChain + longestChild;
    };
    for (const word of words) {
        result = Math.max(result, calcWordChains(word, 1));
    }
    
    return result;
};

export default longestStrChain;

