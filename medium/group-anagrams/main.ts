function groupAnagrams(strs: string[]): string[][] {
    const lookup = new Map<string, string[]>();
    
    for (const str of strs) {
        const sorted = [...str].sort().join('');
        const target = lookup.get(sorted) || [];
        target.push(str);
        
        lookup.set(sorted, target);
    }
    
    return [...lookup.values()];
};

export function groupAnagramsWithoutSort(strs: string[]): string[][] {
    const lookup = new Map<string, string[]>();
    
    for (const str of strs) {
        const keyBuilder = Array(26).fill(0);
        
        for (const char of str) {
            keyBuilder[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = keyBuilder.join();
        const target = lookup.get(key) || [];
        target.push(str);
        
        lookup.set(key, target);
    }
    
    return [...lookup.values()];
};

export default groupAnagrams;
