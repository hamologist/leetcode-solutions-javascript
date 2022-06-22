function subtractProductAndSum(n: number): number {
  const nums = String(n)
    .split('')
    .map((digit) => parseInt(digit, 10));

  const product = nums.reduce((prev, current) => prev * current);
  const sum = nums.reduce((prev, current) => prev + current);

  return product - sum;
}

export default subtractProductAndSum;
