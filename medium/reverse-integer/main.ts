function reverse(x: number): number {
  const isNegative: boolean = x < 0;
  let asString: string = String(x);

  if (isNegative) {
    asString = asString.replace('-', '');
  }

  const ans = Number(asString.split('').reverse().join('')) * (isNegative ? -1 : 1);

  if (ans > (2 ** 31 - 1) || ans < -(2 ** 31)) {
    return 0;
  }

  return ans;
}

export default reverse;
