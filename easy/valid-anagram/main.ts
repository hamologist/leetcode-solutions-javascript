function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    const lookup = new Map<string, number>();
    
    for (const char of s) {
        const count = lookup.get(char) || 0;
        
        lookup.set(char, count + 1);
    }
    
    for (const char of t) {
        const count = lookup.get(char);
        
        if (count === undefined || count === 0) {
            return false;
        }
        
        lookup.set(char, count - 1);
    }
    
    return true;
};

function isAnagramWithSort(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return s.split('')
    .sort()
    .join('') == t.split('')
    .sort()
    .join('');
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log();
console.log(isAnagramWithSort('anagram', 'nagaram'));
console.log(isAnagramWithSort('rat', 'car'));
