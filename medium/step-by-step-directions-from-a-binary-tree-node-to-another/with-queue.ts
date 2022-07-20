import { TreeNode } from '../../_shared/TreeNode'

class Node {
    public previous;
    public next;
    public val;
    
    public constructor(value) {
        this.previous = null;
        this.next = null;
        this.val = value;
    }
}

class MyQueue {
    private head;
    private tail;
    
    public constructor() {
        this.head = null;
        this.tail = null;
    }
    
    public enqueue(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
    
    public dequeue() {
        if (this.head === null) {
            return null;
        }
        
        const node = this.head;
        
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next   
        }
        
        return node.val;
    }
    
    public isEmpty() {
        return this.head === null;
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    if (root === null) {
        return "";
    }
    
    let queue = new MyQueue();
    queue.enqueue([root, ""]);
    let startFound = false;
    let destFound = false;
    let startPath = "";
    let destPath = "";
    
    while (queue.isEmpty() === false) {
        const [currentNode, currentPath] = queue.dequeue();

        if (startFound !== true && currentNode.val === startValue) {
            startPath = currentPath;
            startFound = true;
        }

        if (destFound !== true && currentNode.val === destValue) {
            destPath = currentPath;
            destFound = true;
        }

        if (currentNode.left !== null) {
            queue.enqueue([currentNode.left, `${currentPath}L`]);
        }

        if (currentNode.right !== null) {
            queue.enqueue([currentNode.right, `${currentPath}R`]);
        }
        
        if (startFound === true && destFound === true) {
            break;
        }
    }
    
    if (startFound === false || destFound === false) {
        return "";    
    }
    
    let commonLength = 0;
    for (let i = 0; i < Math.min(startPath.length, destPath.length); i++) {
        if (startPath[i] === destPath[i]) {
            commonLength += 1;
        } else {
            break;
        }
    }
    
    let shortestPath = Array(startPath.slice(commonLength).length + 1).join('U');
    return `${shortestPath}${destPath.slice(commonLength)}`;
};

export default getDirections;

