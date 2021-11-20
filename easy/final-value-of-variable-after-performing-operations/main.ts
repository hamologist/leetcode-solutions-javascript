const plusCheck = /.*\+\+.*/;
const minusCheck = /.*--.*/;

function finalValueAfterOperations(operations: string[]): number {
  let x = 0;

  for (const operation of operations) {
    if (operation.match(plusCheck) != null) {
      x += 1;
    } else if (operation.match(minusCheck) != null) {
      x -= 1;
    }
  }

  return x;
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
console.log(finalValueAfterOperations(['++X', '++X', 'X++']));
console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--']));
