class TreeNode {
    constructor(val, isEntry) {
        this.val = val;
        this.isEntry = isEntry;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TreeNode(null, false)
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let next = current.children.get(word[i]);
            
            if (next === undefined) {
                next = new TreeNode(word.slice(0, i + 1), false)
                current.children.set(word[i], next);
            }
            
            current = next;
        }
        
        current.isEntry = true;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            let next = current.children.get(char);
            
            if (next === undefined) {
                return false;
            }
            
            current = next;
        }
        
        return current.isEntry;
    }

    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            let next = current.children.get(char);
            
            if (next === undefined) {
                return false;
            }
            
            current = next;
        }
        
        return true;
    }
}

export default Trie;

