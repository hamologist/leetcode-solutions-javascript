const wordsTyping = function(sentence, rows, cols) {
    let result = 0;
    let remainingRows = rows - 1;
    let remainingCols = cols;
    let currentWord = 0;

    while (remainingRows >= 0) {
        const wordLength = sentence[currentWord].length;
        
        if (wordLength <= remainingCols) {
            remainingCols -= wordLength + 1;
            currentWord += 1;
            
            if (currentWord === sentence.length) {
                result += 1;
                currentWord = 0;
            }
        } else {
            remainingRows -= 1;
            remainingCols = cols;
        }
    }
    
    return result;
};

export default wordsTyping;

