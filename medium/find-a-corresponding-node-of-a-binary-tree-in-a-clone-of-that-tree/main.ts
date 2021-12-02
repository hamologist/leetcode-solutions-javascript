import { TreeNode } from '../../_shared/TreeNode';

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null,
): TreeNode | null {
  if (cloned === null) {
    return cloned;
  }

  const queue: Array<TreeNode> = [cloned];
  while (queue.length > 0) {
    const current = queue.pop();

    if (current!.val === target!.val) {
      return current!;
    }

    if (current!.left !== null) {
      queue.push(current!.left);
    }

    if (current!.right !== null) {
      queue.push(current!.right);
    }
  }

  return null;
}

export default getTargetCopy;
