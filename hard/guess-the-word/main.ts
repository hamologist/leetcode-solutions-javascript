interface Master {
    guess(word: string): number;
}

/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Master {
 *      guess(word: string): number {}
 * }
 */

function findSecretWord(wordlist: string[], master: Master) {
    let guess = wordlist[~~(Math.random() * wordlist.length)];
    let matches = master.guess(guess);
    
    while (matches !== 6 && wordlist.length !== 0) {
        let newWordlist = [];
        for (let i = 0; i < wordlist.length; i++) {
            let count = 0;
            for (let j = 0; j < 6; j++) {
                if (guess[j] === wordlist[i][j]) {
                    count += 1;
                }
            }
            
            if (count === matches) {
                newWordlist.push(wordlist[i]);
            }
        }
        
        wordlist = newWordlist;
        guess = wordlist[~~(Math.random() * wordlist.length)];
        matches = master.guess(guess);
    }
};

export default findSecretWord;

