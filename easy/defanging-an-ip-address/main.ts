const periodCheck = /\./g;

function defangIPaddr(address: string): string {
  return address.replace(periodCheck, '[.]');
}

console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));
