/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ptr1 = 0;
    let ptr2 = 0;

    let result = "";
    while (ptr1 < word1.length && ptr2 < word2.length) {
        if (ptr1 <= ptr2) {
            result += word1[ptr1];
            ptr1 += 1;
        } else {
            result += word2[ptr2];
            ptr2 += 1;
        }
    }

    for (let i = ptr1; i < word1.length; i++) {
        result += word1[i];
    }
    for (let i = ptr2; i < word2.length; i++) {
        result += word2[i];
    }

    return result;
};

