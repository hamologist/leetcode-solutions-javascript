function isPalindrome(x: number): boolean {
  const asString = String(x);

  return asString === asString
    .split('')
    .reverse()
    .join('');
}

export function isPalindromeWithForLoop(x: number): boolean {
  const asString = String(x);

  for (let i = 0; i < asString.length / 2; i++) {
    if (asString[i] !== asString[asString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
