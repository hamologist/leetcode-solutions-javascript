function countAndSay(n: number): string {
  let ans = '1';

  for (let i = 1; i < n; i++) {
    const groups: Array<[string, number]> = [[ans[0], 1]];
    for (const character of ans.slice(1)) {
      const end = groups[groups.length - 1];
      if (character === end[0]) {
        end[1] += 1;
      } else {
        groups.push([character, 1]);
      }
    }

    ans = groups.map(
      (group) => String(group[1]) + group[0],
    ).join('');
  }

  return ans;
}

export default countAndSay;
