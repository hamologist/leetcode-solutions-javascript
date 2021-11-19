function getConcatenation(nums: number[]): number[] {
  return nums.concat(nums);
}

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
