import { arrayToListNode, ListNode } from '../../_shared/LinkedList';

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  while (head !== null) {
    const { next } = head;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

console.log(
  reverseList(
    arrayToListNode([1, 2, 3, 4, 5]),
  )
    ?.toArray(),
);
