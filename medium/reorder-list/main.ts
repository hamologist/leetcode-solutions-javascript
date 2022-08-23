import { ListNode } from '../../_shared/LinkedList';

function reorderList(head: ListNode | null): void {
    const stack = [];
    let current = head;

    while (current !== null) {
        stack.push(current);
        current = current.next;
    }

    current = head;
    while (current.next !== stack[stack.length - 1] && current.next !== null) {
        const end = stack.pop();
        const next = current.next;
        current.next = end;
        end.next = next;
        current = next;
        stack[stack.length - 1].next = null;
    }
};

export default reorderList;
