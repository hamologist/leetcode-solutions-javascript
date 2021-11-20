function plusOne(digits: number[]): number[] {
  const ans = [...digits];
  let proceed = true;
  let index = digits.length - 1;

  while (proceed && index >= 0) {
    proceed = false;

    if (ans[index] !== 9) {
      ans[index] += 1;
    } else {
      ans[index] = 0;
      proceed = true;
      index -= 1;
    }
  }

  if (proceed && index === -1) {
    ans.unshift(1);
  }

  return ans;
}

export default plusOne;
