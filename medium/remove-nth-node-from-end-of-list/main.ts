import { ListNode } from '../../_shared/LinkedList';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const lookup = [];
    let current = head;
    
    
    while (current !== null) {
        lookup.push(current);
        current = current.next;
    }
    
    if (lookup.length === 1) {
        return null;
    } else if (lookup.length - n === 0) {
        return head!.next;
    }
    
    current = lookup[lookup.length - n - 1];
    current.next = current?.next?.next || null;
    
    return head;
};

export default removeNthFromEnd;
