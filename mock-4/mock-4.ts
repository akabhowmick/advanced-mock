// # Mock Interview 4:

// # Validate Binary Search Tree
// # Given the root of a binary tree, determine if it is a valid BST.
// # Example:
// # Input: root = [2,1,3]
// # Output: True
// # Input: root = [5,1,4,null,null,3,6]
// # Output: False
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root: TreeNode | null, min: number = -Infinity, max: number = Infinity): boolean {
  if (!root) return true; // Base case: Empty tree is a valid BST

  if (root.value <= min || root.value >= max) return false; // Check BST condition

  // Recursively check left and right subtrees with updated constraints
  return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

// ✅ Test Cases
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1)); // Output: true

const tree2 = new TreeNode(5, 
  new TreeNode(1), 
  new TreeNode(4, new TreeNode(3), new TreeNode(6))
);
console.log(isValidBST(tree2)); // Output: false


// # Jump Game
// # Given an array where each element represents the maximum jump length, determine if you can reach the last index.
// # Example:
// # Input: nums = [2,3,1,1,4]
// # Output: True
// # Input: nums = [3,2,1,0,4]
// # Output: False

function canJump(nums: number[]): boolean {
  let maxReach = 0; // Tracks the farthest index we can reach

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false; // If we reach a point we can't jump past, return false
    maxReach = Math.max(maxReach, i + nums[i]); // Update the max reachable index
    if (maxReach >= nums.length - 1) return true; // If we can reach the last index, return true
  }

  return false; // If loop finishes and last index isn't reached, return false
}

// ✅ Test Cases
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false
console.log(canJump([0])); // Output: true (Already at last index)
console.log(canJump([2, 0, 0])); // Output: true (Can reach last index)
console.log(canJump([1, 0, 2])); // Output: false (Gets stuck at index 1)
