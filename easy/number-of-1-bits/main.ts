function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    count += n % 2;
    n >>>= 1;
  }
  return count;
}

console.log(hammingWeight(0b00000000000000000000000000001011));
console.log(hammingWeight(0b00000000000000000000000010000000));
console.log(hammingWeight(0b11111111111111111111111111111101));
