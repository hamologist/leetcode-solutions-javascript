import { ListNode } from '../../_shared/LinkedList';

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let current = head;
    
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        
        prev = current;
        current = next;
    }
    
    return prev;
}

export default reverseList;

