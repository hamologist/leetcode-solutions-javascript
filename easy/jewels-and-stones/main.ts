function numJewelsInStones(jewels: string, stones: string): number {
  const lookup: Set<string> = new Set(jewels);
  let count = 0;

  for (const stone of stones) {
    count += lookup.has(stone) ? 1 : 0;
  }

  return count;
}

export default numJewelsInStones;
