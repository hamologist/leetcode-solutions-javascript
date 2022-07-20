import { TreeNode } from '../../_shared/TreeNode'

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
    
    let currentStack: [TreeNode, string][] = [[root, ""]];
    let startFound = false;
    let destFound = false;
    let startPath = "";
    let destPath = "";
    
    while (currentStack.length !== 0) {
        let newStack: [TreeNode, string][] = [];
        while(currentStack.length !== 0) {
            const [currentNode, currentPath] = currentStack.pop()!;
            
            if (startFound !== true && currentNode.val === startValue) {
                startPath = currentPath;
                startFound = true;
            }
            
            if (destFound !== true && currentNode.val === destValue) {
                destPath = currentPath;
                destFound = true;
            }
            
            if (startFound === true && destFound === true) {
                break;
            }
            
            if (currentNode.left !== null) {
                newStack.push([currentNode.left, `${currentPath}L`]);
            }
            
            if (currentNode.right !== null) {
                newStack.push([currentNode.right, `${currentPath}R`]);
            }
        }
        
        if (startFound === true && destFound === true) {
            break;
        }
        
        currentStack = newStack;
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

