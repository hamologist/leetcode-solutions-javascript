/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = 0;
    let index;
    for (index = s.length - 1; index >= 0; index--) {
        if (s[index] !== " ") {
            break;
        }
    }

    while (s[index] !== " " && index >= 0) {
        result += 1;
        index -= 1;
    }

    return result;
};
