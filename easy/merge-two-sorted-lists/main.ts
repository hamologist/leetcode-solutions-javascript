import { ListNode } from '../../_shared/LinkedList';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result = null;
    let current: ListNode | null = result;
    
    while (list1 !== null || list2 !== null) {
        let splice;
        if (list1 === null) {
            splice = list2;
            list2 = list2!.next;
        } else if (list2 === null) {
            splice = list1;
            list1 = list1.next;
        } else {
            if (list1.val < list2.val) {
                splice = list1;
                list1 = list1.next;
            } else {
                splice = list2;
                list2 = list2.next;
            }
        }
        
        if (result === null) {
            result = splice;
            current = result;
        } else {
            current!.next = splice;
            current = current!.next;
        }
    }
    
    return result;
};

export function mergeTwoListsWithRecurrsion(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    if (l2 === null) {
      return null;
    }
    return new ListNode(l2.val, mergeTwoListsWithRecurrsion(null, l2.next));
  }
  if (l2 === null) {
    return new ListNode(l1.val, mergeTwoListsWithRecurrsion(l1.next, null));
  }
  if (l1.val > l2.val) {
    return new ListNode(l2.val, mergeTwoListsWithRecurrsion(l1, l2.next));
  }
  return new ListNode(l1.val, mergeTwoListsWithRecurrsion(l1.next, l2));
}

export default mergeTwoLists;

