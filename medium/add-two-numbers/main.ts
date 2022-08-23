import { ListNode } from '../../_shared/LinkedList';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let current = dummy;
    
    let left = l1;
    let right = l2;
    let carry = 0;
    while (left !== null && right !== null) {
        const sum = left.val + right.val + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        left = left.next;
        right = right.next;
    }
    
    while (left !== null) {
        const sum = left.val + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        left = left.next;
    }
    
    while (right !== null) {
        const sum = right.val + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        right = right.next;
    }
    
    if (carry !== 0) {
        current.next = new ListNode(carry);
    }
    
    return dummy.next;
};

export default addTwoNumbers;

