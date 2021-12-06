const openingCharacters = new Set(['(', '[', '{']);
const closingCharacters = new Set([')', ']', '}']);
const closeMap = new Map<string, string>([
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
]);

function isValid(s: string): boolean {
  const expectedClose: string[] = [];

  for (const character of s) {
    if (openingCharacters.has(character)) {
      expectedClose.push(closeMap.get(character)!);
    } else if (closingCharacters.has(character)) {
      if (expectedClose.length === 0) {
        return false;
      }

      if (expectedClose[expectedClose.length - 1] === character) {
        expectedClose.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return expectedClose.length === 0;
}

export default isValid;
