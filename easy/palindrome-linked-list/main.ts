import { arrayToListNode, ListNode } from '../../_shared/LinkedList';

function isPalindrome(head: ListNode | null): boolean {
  const asList: Array<number> = [];
  let evaluation: boolean = true;
  while (head !== null) {
    asList.push(head.val);
    head = head.next;
  }

  const { length } = asList;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (asList[i] !== asList[length - i - 1]) {
      evaluation = false;
      break;
    }
  }

  return evaluation;
}

console.log(
  isPalindrome(
    arrayToListNode([1, 2, 2, 1]),
  ),
);
