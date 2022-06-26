function longestPalindrome(s: string): string {
    let result = "";

    const expandAroundCenter = (left: number, right: number): string => {
        if (s[left] !== s[right] || right >= s.length) {
            return "";
        }

        while (left - 1 >= 0 || right + 1 < s.length) {
            if (s[left - 1] !== s[right + 1]) {
                break;
            }

            left -= 1;
            right += 1;
        }

        return s.slice(left, right + 1);
    }

    for (let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(i, i);
        const even = expandAroundCenter(i, i + 1);

        if (odd.length >= even.length && odd.length > result.length) {
            result = odd;
        } else if (even.length > odd.length && even.length > result.length) {
            result = even;
        }
    }

    return result;
}
