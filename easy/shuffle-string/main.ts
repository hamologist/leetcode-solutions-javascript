function restoreString(s: string, indices: number[]): string {
  const ans: string[] = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    ans[indices[i]] = s[i];
  }

  return ans.join('');
}

export default restoreString;
