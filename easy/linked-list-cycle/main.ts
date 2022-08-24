import { ListNode } from '../../_shared/LinkedList';

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
};

export function hasCycleWithSet(head: ListNode | null): boolean {
    const lookup = new Set();
    let current = head;
    
    while (current !== null) {
        if (lookup.has(current)) {
            return true;
        }
        
        lookup.add(current);
        current = current.next;
    }
    
    return false;
};

export default hasCycle;
