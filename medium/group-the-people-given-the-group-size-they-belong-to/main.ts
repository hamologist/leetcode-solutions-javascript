function groupThePeople(groupSizes: number[]): number[][] {
  const lookup: Map<number, number[][]> = new Map<number, number[][]>();

  for (let i = 0; i < groupSizes.length; i++) {
    const groupSize = groupSizes[i];
    if (!lookup.has(groupSize)) {
      lookup.set(groupSize, [[i]]);
    } else {
      const group = lookup.get(groupSize)!;
      const current = group[group.length - 1];
      if (current.length < groupSize) {
        current.push(i);
      } else {
        group.push([i]);
      }
    }
  }

  return [...lookup.values()].flat();
}

export default groupThePeople;
