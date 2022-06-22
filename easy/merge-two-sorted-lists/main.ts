import { arrayToListNode, ListNode } from '../../_shared/LinkedList';

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    if (l2 === null) {
      return null;
    }
    return new ListNode(l2.val, mergeTwoLists(null, l2.next));
  }
  if (l2 === null) {
    return new ListNode(l1.val, mergeTwoLists(l1.next, null));
  }
  if (l1.val > l2.val) {
    return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
  }
  return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
}

console.log(
  mergeTwoLists(
    arrayToListNode([1, 2, 4]),
    arrayToListNode([1, 3, 4]),
  )
    ?.toArray(),
);
console.log(
  mergeTwoLists(
    null,
    null,
  )
    ?.toArray(),
);
console.log(
  mergeTwoLists(
    null,
    arrayToListNode([0]),
  )
    ?.toArray(),
);
