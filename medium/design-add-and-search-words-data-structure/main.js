class TreeNode {
    constructor(isEntry) {
        this.isEntry = isEntry;
        this.children = {};
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode(false);
    }
    
    addWord(word) {
        let current = this.root;
        
        for (const char of word) {
            let next = current.children[char];
            
            if (next === undefined) {
                next = new TreeNode(false);
                current.children[char] = next;
            }
            
            current = next;
        }
        
        current.isEntry = true;
    }
    
    search(word) {
        const inner = (node, start) => {
            for (let i = start; i < word.length; i++) {
                if (word[i] === '.') {
                    for (const child of Object.values(node.children)) {
                        if (inner(child, i + 1)) {
                            return true;
                        }
                    }
                    
                    return false;
                } else {
                    node = node.children[word[i]];
                    
                    if (node === undefined) {
                        return false;
                    }
                }
            }
            
            return node.isEntry;
        }
        
        return inner(this.root, 0);
    }
}

export default WordDictionary;

