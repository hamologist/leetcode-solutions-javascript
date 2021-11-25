import numJewelsInStones from './main';

const testCases: Array<[string, string, number]> = [
  ['aA', 'aAAbbbb', 3],
  ['z', 'ZZ', 0],
];

describe('jewels-and-stones', () => {
  test.each(testCases)(
    'numJewelsInStones where jewels is "%s" and stones is "%s"',
    (jewels: string, stones: string, expected: number) => {
      expect(numJewelsInStones(jewels, stones)).toBe(expected);
    },
  );
});
